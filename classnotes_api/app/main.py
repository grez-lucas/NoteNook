from fastapi import Depends, FastAPI, HTTPException, UploadFile, Response, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import requests
from database import SessionLocal, engine
from typing import Annotated
import schemas, models
import boto3
import magic

app = FastAPI(title="CLASSNOTES API", openapi_url=f"/openapi.json")

origins = [
    "http://localhost",
    "http://frontend:3000",
    "http://localhost:3000",
    "http://192.168.49.2:30100",
    "http://35.90.120.53:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

@app.get("/")
async def root():
    return {"message": "Classnotes API"}

@app.post("/classnotes/")
async def create_classnotes(
    classnote: schemas.ClassnotesCreate,
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


KB = 1024
MB = 1024 * KB

SUPPORTED_FILE_TYPES = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "application/pdf": "pdf",
    "application/msword": "doc",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
    "application/zip": "zip",
}


# @app.post("/classnotes/{classnote_id}/files")
# async def upload_file_to_classnote(
#     classnote_id, file_upload: UploadFile, db: db_dependency
# ):
#     data = await file_upload.read()
#     size = len(data)

#     # Check file size
#     max_size_mb = 1
#     if not 0 < size <= max_size_mb * MB:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST, detail="Supported file size < 1MB"
#         )

#     # This helps security detecting true filetype
#     file_type = magic.from_buffer(buffer=data, mime=True)
#     if file_type not in SUPPORTED_FILE_TYPES:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail=f"Unsupported file type {file_type}, supported types are {SUPPORTED_FILE_TYPES}",
#         )
#     detected_file_ext = SUPPORTED_FILE_TYPES[file_type]

#     # Creation of bucketfile in Postgresql
#     db_file = models.BucketFile(
#         file_name=file_upload.filename,
#         file_ext=detected_file_ext,
#         classnote_id=classnote_id,
#     )
#     db.add(db_file)
#     db.commit()
#     db.refresh(db_file)

#     # Submitting file to S3 bucket
#     s3_key = f"{db_file.id}.{db_file.file_ext}"
#     s3_client.put_object(Key=s3_key, Body=data, Bucket=BUCKET_NAME)

#     return {"key": s3_key}


@app.post("/classnotes/{classnote_id}/files")
async def upload_file_to_classnote(
    classnote_id, file_upload: UploadFile, db: db_dependency
):
    # Detect file extension
    f_ext = file_upload.content_type.split("/")[1]
    # Creation of bucketfile in Postgresql
    db_file = models.BucketFile(
        file_name=file_upload.filename,
        file_ext=f_ext,
        classnote_id=classnote_id,
    )
    db.add(db_file)
    db.commit()
    db.refresh(db_file)

    key = str(db_file.id) + "." + db_file.file_ext
    try:
        s3_url = s3_client.generate_presigned_post(
            Bucket=BUCKET_NAME,
            Key=key,
            ExpiresIn=60,
        )
        return s3_url
    except:
        raise HTTPException(status_code=400, detail="Error generating presigned url")


@app.get("/classnotes/files/{file_key}")
async def download_file_from_classnote(file_key):
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


@app.get("/classnotes/{classnote_id}/files")
async def get_files_from_classnote(classnote_id, db: db_dependency):
    classnote = (
        db.query(models.Classnotes).filter(models.Classnotes.id == classnote_id).first()
    )

    if not classnote:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Not found classnote {classnote_id}.",
        )

    files_return = []
    for f in classnote.files:
        files_return.append(
            {"id": f.id, "file_name": f.file_name, "file_ext": f.file_ext}
        )

    return {"files": files_return}


@app.get("/classnotes/", response_model=list[schemas.ClassnotesBase])
def read_classnotes(db: db_dependency):
    classnotes = db.query(models.Classnotes).all()
    return classnotes


@app.get("/classnotes/{classnote_id}", response_model=schemas.ClassnotesRead)
def read_classnote(classnote_id: int, db: db_dependency):
    classnote = (
        db.query(models.Classnotes).filter(models.Classnotes.id == classnote_id).first()
    )
    if classnote is None:
        raise HTTPException(status_code=404, detail="Classnote not found")
    return classnote
