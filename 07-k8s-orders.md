cd /path/to/k8s/
docker build -t sergkritsa/orders ..\..\orders\

cd ..\..\
kubectl get pods

.\skaffold.exe dev

## update common package w/ order status enum
ticketing\common
npm run pub
cd ../orders
npm update @sknn/common
