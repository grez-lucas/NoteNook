# Instructions

## Setup

1. Copy the `.env.example` file to `.env` and fill in the values.
`
cp dot-env-template .env
`
2. Run `sudo docker compose up --build` to build the containers and start the server.
3. Go to the browser and navigate to `localhost:4005/docs` to see the API documentation.

### TODO:

- [ ] Somehow connect this API to the Users API, so that we can relate courses and enrollments to users.