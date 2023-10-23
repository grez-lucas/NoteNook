FROM python:3.11-slim

ENV PYTHONPATH "${PYTHONPATH}:/app"
WORKDIR /app

# First copy only requirements.txt to cache dependencies independently
COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt
RUN apt-get update && apt-get install -y libmagic-dev

COPY ./app /app

EXPOSE 4004

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "4004"]