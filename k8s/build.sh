minikube start --driver docker

minikube kubectl -- apply -f postgres/postgres-pvc.yaml
minikube kubectl -- apply -f postgres/postgres-config.yaml
minikube kubectl -- apply -f postgres/postgres-secret.yaml
minikube kubectl -- apply -f postgres/postgres.yaml

minikube kubectl -- apply -f classnotes/classnotes-secret.yaml
minikube kubectl -- apply -f classnotes/classnotes.yaml

minikube kubectl -- apply -f users/users-secret.yaml
minikube kubectl -- apply -f users/users.yaml