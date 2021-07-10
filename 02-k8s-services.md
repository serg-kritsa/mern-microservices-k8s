cd /path/to/k8s/
docker build -t sergkritsa/posts ..\..\posts\
docker build -t sergkritsa/event-bus ..\..\event-bus\

ls
kubectl apply -f .\event-bus-depl.yaml
kubectl apply -f .\posts-depl.yaml

kubectl get services
> port:PORT_TO_USE_IN_URL
curl localhost:PORT_TO_USE_IN_URL/posts

## Useful commands
kubectl delete service service_name
kubectl describe service service_name
kubectl delete deployment service_name
minikube ip