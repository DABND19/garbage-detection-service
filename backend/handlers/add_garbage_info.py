from base64 import b64decode
<<<<<<< HEAD
from datetime import datetime
import os
from typing import Literal

from pydantic import BaseModel
from starlette.responses import JSONResponse
=======
import os
from time import time
from typing import Literal

from pydantic import BaseModel
>>>>>>> grafana

from db import Session, Selector
from db.models import Camera, GarbageLog

from .router import router


<<<<<<< HEAD
class Photo(BaseModel):
    extension: Literal['jpeg', 'png', 'jpg']
    data: str


class SingleCameraInfo(BaseModel):
    totalContainers: int
    filledContainers: int
    photo: Photo


def save_photo(photo: Photo, camera: Camera) -> str:
    file_name = f'camera_{camera.id}.{photo.extension}'
    file_path = os.path.join('photos/', file_name)

    raw_data = b64decode(photo.data)
    with open(file_path, 'wb') as f:
        f.write(raw_data)
=======
# class Photo(BaseModel):
#     extension: Literal['jpeg', 'png', 'jpg']
#     data: str


class SingleCameraInfo(BaseModel):
    cameraId: int
    garbageIndex: int
    # photo: Photo


def save_photo(info: SingleCameraInfo) -> str:
    file_name = f'{info.cameraId}_{int(time())}.{info.photo.extension}'
    file_path = os.path.join('photos/', file_name)

    raw_data = b64decode(info.photo.data)
    with open(file_path, 'wb') as f:
        f.write(raw_data)

    return file_path
>>>>>>> grafana

    return file_path


@router.post('/{camera_id}')
async def handler(info: SingleCameraInfo, camera_id: int):
    async with Session() as db_session:
        selector = Selector(db_session)

        camera = await selector.select_camera_with_id(camera_id)
        if not camera:
            error = {'message': f'Camera with id: {camera_id} not found.'}
            return JSONResponse(status_code=404, content={'error': error})

        camera.photo_path = save_photo(info.photo, camera)
        camera.updated_at = datetime.now()
        db_session.add(camera)

        garbage_log = GarbageLog(camera_id=camera.id, 
                                 total_containers_count=info.totalContainers, 
                                 filled_containers_count=info.filledContainers)
        db_session.add(garbage_log)

        await db_session.commit()
<<<<<<< HEAD

    return {'photo': camera.photo_path, 'id': garbage_log.id}
=======
    
    return {}
>>>>>>> grafana
