from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import Relationship
from sqlalchemy.dialects.postgresql import UUID
from .database import Base
import uuid


class Classnotes(Base):
    __tablename__ = "classnotes"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    score = Column(Integer, index=True)
    description = Column(String, index=True)
    downloads = Column(Integer, index=True)
    files = Relationship("BucketFile", cascade="all, delete")
    owner_id = Column(Integer, index=True)
    # course_id = Column(Integer, index=True)


class BucketFile(Base):
    __tablename__ = "bucketfiles"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid.uuid4)

    file_name = Column(String, index=True)
    file_ext = Column(String, index=True)

    classnote_id = Column(Integer, ForeignKey("classnotes.id"))
