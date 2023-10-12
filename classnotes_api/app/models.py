from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, JSON
from sqlalchemy.orm import relationship
from .database import Base


class Classnotes(Base):
    __tablename__ = "classnotes"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    score = Column(Integer, index=True)
    description = Column(String, index=True)
    downloads = Column(Integer, index=True)
    files = Column(JSON, default=list)
    owner_id = Column(Integer, index=True)
    # course_id = Column(Integer, index=True)
