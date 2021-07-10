cd /path/to/Dockerfile/
ls
docker build -t sergkritsa/posts:0.0.1 .

cd /path/to/
kubectl apply -f deployment_filename
kubectl apply -f service_filename
kubectl get services
> port:PORT_TO_USE_IN_URL
curl localhost:PORT_TO_USE_IN_URL/posts

## Useful commands
kubectl get 
kubectl describe service service_name
kubectl delete deployment service_name
minikube ip