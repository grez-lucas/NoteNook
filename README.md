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


# Kubernetes setup

To run the app on Kubernetes, you must have minikube installed on your machine. If you do not have minikube installed, please follow the instructions here: https://minikube.sigs.k8s.io/docs/start/



To start your minikube cluster, run the following command:

```
minikube start --driver docker
```
(Make sure your docker daemon is running beforehand, if it isn't, run: `sudo dockerd` or `systemctl start docker`, if you still have errors with the daemon not showing up, check your docker context:
https://docs.docker.com/desktop/faqs/linuxfaqs/)

To build each app, run the following commands:
```
cd k8s
chmod +x build.sh
./build.sh
```
(You may have to wait a little for each deployment to pull images and be ready, to check the current status of each deployment, run `minikube kubectl -- get deployments` ) 

Then find the IP address of the minikube cluster by running the following command:
```
minikube ip
```
To get the port number of each service, run the following command:
```
minikube kubectl -- get svc 
```
Then, you can access the app by going to the IP address of the minikube cluster and the port number of the service you want to access.
