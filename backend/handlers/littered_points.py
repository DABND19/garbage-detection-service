from typing import Tuple

from db import Session, Selector
from db.models import Camera

from .router import router


def serialize_point(point: Tuple[Camera, int]):
    camera, garbage_index = point
    return {'garbageIndex': garbage_index, 
            'location': [camera.coordinate_x, camera.coordinate_y]}

@router.get('/littered-points')
async def handler():
    async with Session() as db_session:
        selector = Selector(db_session)
        points = await selector.select_littered_points()
    
    return {'data': list(map(serialize_point, points))}
