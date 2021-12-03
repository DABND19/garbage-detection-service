from base64 import b64decode
import os
from time import time
from typing import Literal

from pydantic import BaseModel

from db import Session
from db.models import GarbageLog

from .router import router


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


@router.post('/add-garbage-info')
async def handler(info: SingleCameraInfo):
    async with Session() as db_session:
        obj = GarbageLog(camera_id=info.cameraId, 
                         garbage_index=info.garbageIndex)
        db_session.add(obj)
        await db_session.commit()
    
    return {}
