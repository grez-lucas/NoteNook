from pydantic import BaseModel


class ClassnotesBase(BaseModel):
    title: str
    score: float
    description: str | None = None
    downloads: int
    owner_id: int
    # course_id: int
