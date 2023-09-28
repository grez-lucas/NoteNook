import os

class Settings():
    REDIS_HOST= os.getenv("REDIS_HOST", None)
    REDIS_PORT= os.getenv("REDIS_PORT", None)
    REDIS_PASSWORD= os.getenv("REDIS_PASSWORD", None)

settings = Settings()