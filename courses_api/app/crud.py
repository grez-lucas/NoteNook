from sqlalchemy.orm import Session

from . import models, schemas


# def get_user(db: Session, user_id: int):
#     return db.query(models.User).filter(models.User.id == user_id).first()


# def get_user_by_email(db: Session, email: str):
#     return db.query(models.User).filter(models.User.email == email).first()


# def get_users(db: Session, skip: int = 0, limit: int = 100):
#     return db.query(models.User).offset(skip).limit(limit).all()


# def create_user(db: Session, user: schemas.UserCreate):
#     fake_hashed_password = user.password + "notreallyhashed"
#     db_user = models.User(email=user.email, hashed_password=fake_hashed_password)
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user


# def get_items(db: Session, skip: int = 0, limit: int = 100):
#     return db.query(models.Item).offset(skip).limit(limit).all()


# def create_user_item(db: Session, item: schemas.ItemCreate, user_id: int):
#     db_item = models.Item(**item.dict(), owner_id=user_id)
#     db.add(db_item)
#     db.commit()
#     db.refresh(db_item)
#     return db_item

def create_courses(db: Session, courses: schemas.CoursesCreate):
    db_courses = models.Courses(**courses.dict())
    db.add(db_courses)
    db.commit()
    db.refresh(db_courses)
    return db_courses

def get_courses(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Courses).offset(skip).limit(limit).all()

def get_course(db: Session, course_id: int):
    return db.query(models.Courses).filter(models.Courses.id == course_id).first()

def create_enrollments(db: Session, enrollments: schemas.EnrollmentsCreate):
    db_enrollments = models.Enrollments(**enrollments.dict())
    db.add(db_enrollments)
    db.commit()
    db.refresh(db_enrollments)
    return db_enrollments

def get_enrollments(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Enrollments).offset(skip).limit(limit).all()

def get_enrollment(db: Session, enrollment_id: int):
    return db.query(models.Enrollments).filter(models.Enrollments.id == enrollment_id).first()

def get_enrollments_by_user(db: Session, user_id: int):
    return db.query(models.Enrollments).filter(models.Enrollments.user_id == user_id).all()

def get_enrollments_by_course(db: Session, course_id: int):
    return db.query(models.Enrollments).filter(models.Enrollments.course_id == course_id).all()
