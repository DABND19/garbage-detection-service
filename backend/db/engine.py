from typing import Callable

from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine

from settings import (
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USER
)


db_url = f"postgresql+asyncpg://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
engine = create_async_engine(db_url)

Session: Callable[[], AsyncSession] = sessionmaker(bind=engine, 
                                                   class_=AsyncSession, 
                                                   expire_on_commit=False)
