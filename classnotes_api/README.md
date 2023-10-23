# Instructions

## Setup

1. Copy the `.env.example` file to `.env` and fill in the values.
`
cp dot-env-template .env
`
2. Run `sudo docker compose up --build` to build the containers and start the server.
3. Go to the browser and navigate to `localhost:4004/docs` to see the API documentation.

# If you only want to build the image

`sudo docker build -t classnotes_api:latest .`