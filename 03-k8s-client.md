cd /path/to/k8s/
docker build -t sergkritsa/client ..\..\client\

cd ..\..\
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

.\skaffold.exe dev

curl ticketing.dev
to pass `net::ERR_CERT_AUTHORITY_INVALID` warning it's need to open warning description and type `thisisunsafe`
curl ticketing.dev/banana

### force recreation if needed for watch mode
kubectl get pods
kubectl delete pods client-depl-###

(2nd terminal) cd ./ticketing/client
(2nd terminal) npm i bootstrap@5.0.1
(1nd terminal) skaffold will rebuild image