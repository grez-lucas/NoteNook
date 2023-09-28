from redis_om import HashModel
from ..database.database import redis

class Enrollment(HashModel):
    title: str

    class Meta:
        database = redis