# NoteNook
An app for teachers and students to share and access class notes


# Instructions for running the app

To run the app, you must have docker installed on your machine. If you do not have docker installed, please follow the instructions here: https://docs.docker.com/get-docker/

In each of the following apps, you should modify the dot-env-template file to include your own credentials. Once you have done this, you can proceed to the next step.

Once you have docker installed, you can run the app by running the following command in the root directory of the project:

# Build the app
(If your machine is running Linux or MacOS)
```
chmod +x build.sh
./build.sh
```
# Compose the app
```
sudo docker compose -f deploy.yaml up
```