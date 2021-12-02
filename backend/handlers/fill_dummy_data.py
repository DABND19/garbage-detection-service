from random import randint

from db import Session
from db.models import Camera, GarbageLog

from .router import router


@router.post('/fill-dummy-data')
async def fill_with_dummy_data():
    async with Session() as db_session:
        for i in range(10):
            camera = Camera(coordinate_x=55.7360991 + float(randint(-10, 10)) / 10,
                            coordinate_y=37.6125179 + float(randint(-10, 10)) / 10)
            db_session.add(camera)
            await db_session.commit()

            garbage_log = GarbageLog(camera_id=camera.id, garbage_index=randint(0, 10))
            db_session.add(garbage_log)
            await db_session.commit()
