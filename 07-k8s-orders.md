cd /path/to/k8s/
docker build -t sergkritsa/orders ..\..\orders\

cd ..\..\
kubectl get pods

.\skaffold.exe dev
