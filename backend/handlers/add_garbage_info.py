from base64 import b64decode
import os
from typing import Literal

from pydantic import BaseModel
from starlette.responses import JSONResponse

from db import Session, Selector
from db.models import GarbageLog

from .router import router


class Photo(BaseModel):
    extension: Literal['jpeg', 'png', 'jpg']
    data: str


class SingleCameraInfo(BaseModel):
    totalContainers: int
    filledContainers: int
    photo: Photo


def save_photo(info: SingleCameraInfo) -> str:
    file_name = f'camera_{info.cameraId}.{info.photo.extension}'
    file_path = os.path.join('photos/', file_name)

    raw_data = b64decode(info.photo.data)
    with open(file_path, 'wb') as f:
        f.write(raw_data)

    return file_path


@router.post('/{camera_id}')
async def handler(info: SingleCameraInfo, camera_id: int):
    async with Session() as db_session:
        selector = Selector(db_session)

        camera = await selector.select_camera_with_id(camera_id)
        if not camera:
            error = {'message': f'Camera with id: {camera_id} not found.'}
            return JSONResponse(status_code=404, content={'error': error})

        camera.photo_path = save_photo(info)
        db_session.add(camera)

        garbage_log = GarbageLog(camera_id=camera.id, 
                                 total_containers_count=info.totalContainers, 
                                 filled_containers_count=info.filledContainers)
        db_session.add(garbage_log)

        await db_session.commit()

    return {'photo': camera.photo_path, 'id': garbage_log.id}
