from datetime import datetime
from typing import Tuple

<<<<<<< HEAD
import sqlalchemy

from datetime import datetime
from db import Session, Selector, Insertor
=======
from db import Session, Selector
>>>>>>> main
from db.models import Camera

from .router import router


def serialize_point(point: Tuple[Camera, int, datetime]):
    camera, garbage_index, time_ = point
    return {'cameraId': camera.id,
            'garbageIndex': garbage_index,
            'time': time_,
<<<<<<< HEAD
            'location': [camera.lat, camera.alt]}
=======
            'location': [camera.coordinate_x, camera.coordinate_y]}
>>>>>>> main


@router.get('/littered-points')
async def handler():
    async with Session() as db_session:
        selector = Selector(db_session)
        points = await selector.select_littered_points()

    return {'data': list(map(serialize_point, points))}
