from datetime import datetime

from sqlalchemy import Column
from sqlalchemy.sql.schema import ForeignKey
from sqlalchemy.sql.sqltypes import DateTime, Float, String
from sqlalchemy.types import Integer
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()


class Camera(Base):
    __tablename__ = 'camera'

<<<<<<< HEAD
    id = Column(Integer, primary_key=True)
    created_at = Column(DateTime, default=datetime.now, nullable=False)
    updated_at = Column(DateTime, default=datetime.now, nullable=False)

=======
    id = Column(Integer, primary_key=True, autoincrement=True)
    created_at = Column(DateTime, default=datetime.now, nullable=False)
    updated_at = Column(DateTime, default=datetime.now, nullable=False)


class Camera(AbstractBase):
    __tablename__ = 'camera'

>>>>>>> grafana
    lat = Column(Float, nullable=False)
    alt = Column(Float, nullable=False)

    address = Column(String(512), nullable=False)
    photo_path = Column(String(2048))


class GarbageLog(Base):
    __tablename__ = 'garbage_log'

<<<<<<< HEAD
    id = Column(Integer, primary_key=True, autoincrement=True)
    created_at = Column(DateTime, default=datetime.now, nullable=False)
    updated_at = Column(DateTime, default=datetime.now, nullable=False)

    camera_id = Column(Integer, ForeignKey(Camera.id), nullable=False)
    total_containers_count = Column(Integer, nullable=False, default=0)
    filled_containers_count = Column(Integer, nullable=False, default=0)
=======
    garbage_index = Column(Integer, nullable=False)
    camera_id = Column(Integer, ForeignKey(Camera.id), nullable=False)
    photo_path = Column(String(2000))
>>>>>>> grafana
