FROM python:3.11-slim

WORKDIR /app
ENV PYTHONPATH=/app
ENV PYTHONDONTWRITEBYTECODE=1

# First copy only requirements.txt to cache dependencies independently
COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt
RUN apt-get update && apt-get install -y libmagic-dev
COPY . /app

EXPOSE 4004

ENV UVICORN_HOST=0.0.0.0 UVICORN_PORT=4004 UVICORN_LOG_LEVEL=info