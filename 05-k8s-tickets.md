cd /path/to/k8s/
docker build -t sergkritsa/tickets ..\..\tickets\

cd ..\..\
kubectl get pods

.\skaffold.exe dev

## update common package w/ version
ticketing\common
npm i mongoose-update-if-current@1.4.0
npm run pub
cd ../tickets
npm i mongoose-update-if-current@1.4.0
npm update @sknn/common
