cd posts
docker build -t sergkritsa/posts:0.0.1 .

cd ../infra/k8s
kubectl apply -f posts.yml
kubectl get pods
kubectl delete pod posts