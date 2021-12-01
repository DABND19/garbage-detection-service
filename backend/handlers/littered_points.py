from typing import Tuple

import sqlalchemy

from db import Session, Selector, Insertor
from db.models import Camera
from sqlalchemy import insert
from .router import router
from models import SingleCameraInfo

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




@router.post('/add_garbage_info')
async def add_garbage_info(info: SingleCameraInfo):
    async with Session() as db_session:
        insertor = Insertor(db_session)
        result = await insertor.update_garbage_info(info)

@router.post('/fill_with_dummy_data')
async def fill_with_dummy_data():
    async with Session() as db_session:
        insertor = Insertor(db_session)
        result = await insertor.fill_with_dummy_data()