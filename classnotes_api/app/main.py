from fastapi import Depends, FastAPI, HTTPException, UploadFile, Response
from sqlalchemy.orm import Session
import requests
from .database import SessionLocal, engine
from typing import Annotated
from . import schemas, models
import boto3

app = FastAPI(title="CLASSNOTES API", openapi_url=f"/openapi.json")

models.Base.metadata.create_all(bind=engine)


ACCESS_KEY = "AKIAYQZN2A7XHQ57Q4FT"
SECRET_KEY = "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"
BUCKET_NAME = "classnotesfiles"
s3_client = boto3.client(
    "s3", aws_access_key_id=ACCESS_KEY, aws_secret_access_key=SECRET_KEY
)


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


@app.post("/classnotes/")
async def create_classnotes(
    classnote: schemas.ClassnotesBase,
    db: db_dependency,
):
    # Check if user exists in users API
    print(classnote)

    owner_id = classnote.owner_id

    print("owner_id: ", owner_id)
    # try:
    #     req = requests.get(f"http://users_api_app:4002/users/{owner_id}")
    # except:
    #     return HTTPException(
    #         status_code=404, detail="Error fetching user from users API"
    #     )

    # if req.status_code != 200:
    #     raise HTTPException(status_code=404, detail="User not found")

    # Check if course exists in courses API

    # course_id = body['course_id']

    # try:
    #     requests.get("http://courses_api_app:4005/courses/%s" % course_id,)
    # except:
    #     return HTTPException(status_code=404, detail="Course not found")

    db_classnote = models.Classnotes(
        title=classnote.title,
        score=classnote.score,
        description=classnote.description,
        downloads=classnote.downloads,
        owner_id=classnote.owner_id,
    )

    # Uploading to DB
    db.add(db_classnote)
    db.commit()
    db.refresh(db_classnote)

    return {"classnote_id": db_classnote.id}


@app.post("/classnotes/{classnote_id}/files")
async def upload_file_to_classnote(classnote_id, file_upload: UploadFile):
    data = await file_upload.read()
    s3_client.put_object(Key=file_upload.filename, Body=data, Bucket=BUCKET_NAME)
    return {"filename": file_upload.filename}


@app.get("/classnotes/{classnote_id}/files/{file_key}")
async def download_file_from_classnote(classnote_id, file_key):
    try:
        res = s3_client.get_object(Bucket=BUCKET_NAME, Key=file_key)
        data = res["Body"].read()
    except:
        return {"info": f"Error getting {file_key} from S3."}

    return Response(
        content=data,
        headers={
            "Content-Disposition": f"inline;filename={file_key}",
            "Content-Type": "application/octet-stream",
        },
    )


@app.get("/classnotes/", response_model=list[schemas.ClassnotesBase])
def read_classnotes(db: db_dependency):
    classnotes = db.query(models.Classnotes).all()
    return classnotes


@app.get("/classnotes/{classnote_id}", response_model=schemas.ClassnotesBase)
def read_classnote(classnote_id: int, db: db_dependency):
    classnote = (
        db.query(models.Classnotes).filter(models.Classnotes.id == classnote_id).first()
    )
    if classnote is None:
        raise HTTPException(status_code=404, detail="Classnote not found")
    return classnote
