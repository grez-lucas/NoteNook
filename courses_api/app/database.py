from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os


POSTGRES_USER=os.getenv("POSTGRES_USER")
POSTGRES_PASSWORD=os.getenv("POSTGRES_PASSWORD")
POSTGRES_SERVER=os.getenv("POSTGRES_SERVER")
POSTGRES_DB=os.getenv("POSTGRES_DB")

# SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
SQLALCHEMY_DATABASE_URL = f"postgresql+psycopg2://postgres:anihortes@notenook-db.c8j5xifndnry.us-west-2.rds.amazonaws.com:5432/postgres"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, #={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
