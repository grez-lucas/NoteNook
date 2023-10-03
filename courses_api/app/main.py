from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from starlette.requests import Request
import requests

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="COURSES API", openapi_url=f"/openapi.json"
)


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ======== COURSES ========== # 

@app.post("/courses/", response_model=schemas.Courses)
def create_courses(courses: schemas.CoursesCreate, db: Session = Depends(get_db)):
    return crud.create_courses(db=db, courses=courses)

@app.get("/courses/", response_model=list[schemas.Courses])
def read_courses(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    courses = crud.get_courses(db, skip=skip, limit=limit)
    return courses

@app.get("/courses/{course_id}", response_model=schemas.Courses)
def read_course(course_id: int, db: Session = Depends(get_db)):
    db_course = crud.get_course(db, course_id=course_id)
    if db_course is None:
        raise HTTPException(status_code=404, detail="Course not found")
    return db_course

# ======== ENROLLMENTS ========== # 

@app.get("/enrollments/", response_model=list[schemas.Enrollments])
def read_enrollments(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    enrollments = crud.get_enrollments(db, skip=skip, limit=limit)
    return enrollments

@app.post("/enrollments/", response_model=schemas.Enrollments)
async def create_enrollments(request: Request, enrollments: schemas.EnrollmentsCreate, db: Session = Depends(get_db)):
    # Check if user exists in users API
    body = await request.json()
    print (body)
    user_id = body['user_id']

    req = requests.get("http://users_api_app:4002/users/%s" % user_id,
                         )
    
    if req.status_code != 200:
        return HTTPException(status_code=404, detail="User not found")
    
    # Check if course exists in this API
    course_id = body['course_id']
    if crud.get_course(db, course_id=course_id) is None:
        raise HTTPException(status_code=404, detail="Course not found")



    return crud.create_enrollments(db=db, enrollments=enrollments)
    
@app.get("/enrollments/{enrollment_id}", response_model=schemas.Enrollments)
def read_enrollment(enrollment_id: int, db: Session = Depends(get_db)):
    db_enrollment = crud.get_enrollment(db, enrollment_id=enrollment_id)
    if db_enrollment is None:
        raise HTTPException(status_code=404, detail="Enrollment not found")
    return db_enrollment

@app.get("/enrollments/user/{user_id}", response_model=list[schemas.Enrollments])
def read_enrollments_by_user(user_id: int, db: Session = Depends(get_db)):
    db_enrollment = crud.get_enrollments_by_user(db, user_id=user_id)
    if db_enrollment is None:
        raise HTTPException(status_code=404, detail="Enrollment not found")
    return db_enrollment

@app.get("/enrollments/course/{course_id}", response_model=list[schemas.Enrollments])
def read_enrollments_by_course(course_id: int, db: Session = Depends(get_db)):
    db_enrollment = crud.get_enrollments_by_course(db, course_id=course_id)
    if db_enrollment is None:
        raise HTTPException(status_code=404, detail="Enrollment not found")
    return db_enrollment