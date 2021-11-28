from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine

engine = create_async_engine('sqlite+aiosqlite:///./database.sqlite')

Session = sessionmaker(bind=engine, class_=AsyncSession)
