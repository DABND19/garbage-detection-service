from typing import Tuple
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql import insert, func

from .models import GarbageLog, Camera
from datetime import datetime
from models import SingleCameraInfo
import random

class Insertor:
    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def update_garbage_info(self, single_camera_info: SingleCameraInfo) -> None:
        created_at = datetime.fromtimestamp(single_camera_info.created_at)
        updated_at = single_camera_info.updated_at if single_camera_info.updated_at is not None else single_camera_info.created_at
        updated_at = datetime.fromtimestamp(updated_at)
        statement = (
          insert(GarbageLog).
          values(
            created_at=created_at,
            updated_at=updated_at,
            garbage_index=single_camera_info.garbage_index,
            camera_id=single_camera_info.camera_id
          )
        )
        await self.session.execute(statement)
        await self.session.commit()
    
    async def fill_with_dummy_data(self) -> None:
        for i in range(10):
            created_at = updated_at = datetime.now()
            statement = (
                insert(Camera).
                values(
                    created_at=created_at,
                    updated_at=updated_at,
                    coordinate_x=55.7360991 + float(i) / 10,
                    coordinate_y=37.6125179 + float(i) / 10,
                )
            )
            info = SingleCameraInfo
            info.created_at = created_at.timestamp()
            info.updated_at = updated_at.timestamp()
            info.garbage_index = random.randint(0, 10)
            info.camera_id = i
            await self.session.execute(statement)
            await self.update_garbage_info(info)
        await self.session.commit()
        
