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

class CoursesBase(BaseModel):
    title: str

class CoursesCreate(CoursesBase):
    pass

class Courses(CoursesBase):
    id: int

    class Config:
        orm_mode = True

class EnrollmentsBase(BaseModel):
    user_id: str
    course_id: int

class EnrollmentsCreate(EnrollmentsBase):
    pass

class Enrollments(EnrollmentsBase):
    id: int

    class Config:
        orm_mode = True