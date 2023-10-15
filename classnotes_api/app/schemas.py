from pydantic import BaseModel


class ClassnotesBase(BaseModel):
    id: int
    title: str
    score: float
    description: str | None = None
    downloads: int
    owner_id: int
    # course_id: int

class ClassnotesCreate(BaseModel):
    title: str
    score: float
    description: str | None = None
    downloads: int
    owner_id: int

class ClassnotesRead(BaseModel):
    title: str
    score: float
    description: str | None = None
    downloads: int
    owner_id: int