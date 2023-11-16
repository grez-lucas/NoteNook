FROM python:3.11-slim

WORKDIR /app
ENV PYTHONPATH "${PYTHONPATH}:/app"
ENV PYTHONDONTWRITEBYTECODE=1

# First copy only requirements.txt to cache dependencies independently
COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt

COPY ./app /app

EXPOSE 4005

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "4005", "--workers", "4"]