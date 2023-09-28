from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.database import redis
from app.models.courses import Course
from fastapi import HTTPException

app = FastAPI(
    title="Classnotes API Gateway", openapi_url=f"/openapi.json"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000', 'http://localhost:8000', 'http://localhost', 'localhost'],
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/courses")
def root():
    return [format(pk) for pk in Course.all_pks()]

def format(pk:str):
    course = Course.get(pk)

    return {
        'id': pk,
        'title': course.title
    }

@app.post('/courses')
def create(course: Course):
    return course.save()

@app.get('/courses/{pk}')
def get(pk: str):
    try:
        course = Course.get(pk)
        return course
    except:
        return HTTPException(status_code=404, detail="Course not found")

@app.delete('/courses/{pk}')
def delete(pk: str):
    try:
        Course.delete(pk)
        return {'message': 'Course deleted'}
    except:
        return HTTPException(status_code=404, detail="Course not found")