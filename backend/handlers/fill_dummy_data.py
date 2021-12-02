from random import randint

from db import Session
from db.models import Camera, GarbageLog

from .router import router


@router.post('/fill-dummy-data')
async def fill_with_dummy_data():
    async with Session() as db_session:
        for i in range(10):
            camera = Camera(
                lat=55.786778667350575 + float(randint(-1000, 1000)) / 10000,
                alt=49.12538845509848 + float(randint(-1000, 1000)) / 10000)
            db_session.add(camera)
            await db_session.commit()

            garbage_log = GarbageLog(camera_id=camera.id, garbage_index=randint(0, 10))
            db_session.add(garbage_log)
            await db_session.commit()
