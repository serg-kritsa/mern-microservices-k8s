cd /path/to/k8s/
docker build -t sergkritsa/client ..\..\client\

cd ..\..\
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

.\skaffold.exe dev

curl ticketing.dev
to pass `net::ERR_CERT_AUTHORITY_INVALID` warning it's need to type `thisisunsafe`
curl ticketing.dev/banana
