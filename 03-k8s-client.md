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

(2nd terminal) cd ./ticketing/client
(2nd terminal) npm i axios@0.21.1
(1nd terminal) skaffold will rebuild image

kubectl get namespace
kubectl get services -n ingress-nginx
`http://ingress-nginx.ingress-nginx.svc.cluster.local`

clear cookie 
F12 > |Application| > 
    'Storage' > +'Cookie' > click on hostname in list > +'x' icon w/ 'Clear all' title above table  