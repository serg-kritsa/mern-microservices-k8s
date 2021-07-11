cd /path/to/k8s/
docker build -t sergkritsa/posts ..\..\posts\
docker build -t sergkritsa/event-bus ..\..\event-bus\
docker build -t sergkritsa/comments ..\..\comments\
docker build -t sergkritsa/query ..\..\query\
docker build -t sergkritsa/moderation ..\..\moderation\

ls
kubectl apply -f .\event-bus-depl.yaml
kubectl apply -f .\posts-depl.yaml
kubectl apply -f .\comments-depl.yaml
kubectl apply -f .\moderation-depl.yaml
kubectl apply -f .\query-depl.yaml
kubectl get services
> port:PORT_TO_USE_IN_URL
curl localhost:PORT_TO_USE_IN_URL/posts

kubectl apply -f .\ingress-nginx.yaml
in `C:\Windows\System32\drivers\etc\hosts` or `/etc/hosts` add `127.0.0.1 posts.com`
curl posts.com/posts

## Added support for client routes
docker build -t sergkritsa/client ..\..\client\
kubectl apply -f .\client-depl.yaml
docker build -t sergkritsa/posts ..\..\posts\
kubectl apply -f .\posts-depl.yaml
kubectl apply -f .\ingress-nginx.yaml

### Clean
kubectl delete deployment client-depl comments-depl event-bus-depl moderation-depl posts-depl query-depl

docker build -t sergkritsa/posts ..\..\posts\
docker build -t sergkritsa/event-bus ..\..\event-bus\
docker build -t sergkritsa/comments ..\..\comments\
docker build -t sergkritsa/query ..\..\query\
docker build -t sergkritsa/moderation ..\..\moderation\
docker build -t sergkritsa/client ..\..\client\

kubectl apply -f .\event-bus-depl.yaml -f .\posts-depl.yaml -f .\comments-depl.yaml -f .\moderation-depl.yaml -f .\query-depl.yaml -f .\client-depl.yaml -f .\ingress-nginx.yaml

## Skafold from Google
* save the binary from `https://skaffold.dev/docs/install/` as `skaffold` in project root
./skaffold version
./skaffold dev

## Useful commands
kubectl delete service service_name
kubectl describe service service_name
kubectl delete deployment service_name
minikube ip

## To determine what might be using this port, run:
* macOS / Linux
sudo lsof -i tcp:80
*Windows:
netstat -aon | findstr :80