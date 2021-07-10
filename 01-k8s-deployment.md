cd /path/to/Dockerfile/
ls
docker build -t sergkritsa/posts:0.0.1 .

cd /path/to/
kubectl apply -f filename
kubectl get pods

## Test of recreation of pod
kubectl delete pods pod_name
pod instance will be recreated by deployment

## Updating deployment. way w/ version
* make an update to code
* rebuild image w/ newer version
docker build -t sergkritsa/posts:0.0.2 .
* update version of image in config_file
* kubectl apply -f filename
* kubectl get pods
* kubectl logs pods_name


## Useful commands
kubectl get deployments
kubectl describe deployment deployment_name
kubectl delete deployment deployment_name
