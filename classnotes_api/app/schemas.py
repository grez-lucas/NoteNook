from pydantic import BaseModel


# class ItemBase(BaseModel):
#     title: str
#     description: str | None = None


# class ItemCreate(ItemBase):
#     pass


# class Item(ItemBase):
#     id: int
#     owner_id: int

#     class Config:
#         orm_mode = True


# class UserBase(BaseModel):
#     email: str


# class UserCreate(UserBase):
#     password: str


# class User(UserBase):
#     id: int
#     is_active: bool
#     items: list[Item] = []

#     class Config:
#         orm_mode = True

class ClassnotesBase(BaseModel):
    title: str
    score: float
    description: str | None = None
    downloads: int
    owner_id: int
    # course_id: int


class ClassnotesCreate(ClassnotesBase):
    pass

class Classnotes(ClassnotesBase):
    id: int

    class Config:
        orm_mode = True