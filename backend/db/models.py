from datetime import datetime

from sqlalchemy import Column
from sqlalchemy.sql.schema import ForeignKey
from sqlalchemy.sql.sqltypes import DateTime, Float, String
from sqlalchemy.types import Integer
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()


class AbstractBase(Base):
    __abstract__ = True

    id = Column(Integer, primary_key=True, autoincrement=True)
    created_at = Column(DateTime, default=datetime.now, nullable=False)
    updated_at = Column(DateTime, default=datetime.now, nullable=False)


class Camera(AbstractBase):
    __tablename__ = 'camera'

    lat = Column(Float, nullable=False)
    alt = Column(Float, nullable=False)


class GarbageLog(AbstractBase):
    __tablename__ = 'garbage_log'

    garbage_index = Column(Integer, nullable=False)
    camera_id = Column(Integer, ForeignKey(Camera.id), nullable=False)
    photo_path = Column(String(2000))
