cd /path/to/k8s/
docker build -t sergkritsa/tickets ..\..\tickets\

cd ..\..\
kubectl get pods

.\skaffold.exe dev
