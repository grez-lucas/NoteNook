from redis_om import HashModel
from ..database.database import redis

class Course(HashModel):
    title: str

    class Meta:
        database = redis
