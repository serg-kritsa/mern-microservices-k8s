* push ci workflow to master branch
* `git checkout -b dev`
* push changes in dev branch
* create pull request from dev to master in github UI 
* git will start test automatically for pull request


## Hosting on Digital Ocean
### Creating cluster
create cluster w/ 
- 3 nodes 
- custom cluster name
- wait while seting up

### Config command-line tool for cloud cluster
- install [doctl cli](https://github.com/digitalocean/doctl)
- generate token on account page
API > 
    'Applications & API' > |Tokens/Keys| > +'Generate New Token'
        'Token Name'='my_token_name' > +'Generate Token'
            copy generated token
    'Applications & API' > |Tokens/Keys| > +'Generate New Token'
        'Token Name'='my_github_token_name' > +'Generate Token'
            copy generated token
### connect to cluster via command-line tool
- use <generated token> to signin to the DOcean account 
> doctl auth init
- - paste <generated token> & hit Enter

- switching to cloud context
> doctl kubernates cluster kubeconfig save <cluster name>
- get cluster nodes
> kubectl get nodes
- get cluster pods
> kubectl get pods

### switch between clusters. V0. via cli
- show all clusters (local & remote) info
> kubectl config view
- find name to switch
.contexts[N].name: <cluster name>
.contexts[N].context.cluster: <abc>
.contexts[N].context.user: <abc>
- Switch back to local context (docker-desktop for example)
> kubectl config use-context <cluster name>
- make sure that switched to docker-desktop
> kubectl get nodes

### switch between clusters. V1. via Docker icon in Windows system tray > Kubernates

### add Github secrets
- github.com/<user name>/<repo name>/settings/secrets
    +'Add a new secret' > 
        'Name'='DOCKER_USERNAME' > 'Value'='docker_username' > +'Add secret'
    +'Add a new secret' > 
        'Name'='DOCKER_PASSWORD' > 'Value'='docker_password' > +'Add secret'
    +'Add a new secret' > 
        'Name'='DIGITALOCEAN_ACCESS_TOKEN' > 'Value'='my_github_token_name' > +'Add secret'
- referencing to them in .github/workflows/.yaml in command as environment variable
.jobs.build.steps[N].run: docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
.jobs.build.steps[N].env.DOCKER_USERNAME: ${{ secrets.DOCKER_USERNAME }}
.jobs.build.steps[N].env.DOCKER_USERNAME: ${{ secrets.DOCKER_PASSWORD }}

### add k8s secret to k8s cloud cluster
- print config
> kubectl config view
- find name to switch in .contexts[N].name: <cluster name>
- switch
> kubectl config use-context <cluster name>
- create k8s secrets 
> kubectl create secret generic <name of secret> --from-literal <name of key>=<actual key>
> kubectl create secret generic jwt-secret --from-literal JWT_KEY=secret-key
> kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=secret-key

### setup ingress-nginx in k8s cloud cluster
- switch to cloud context
- install ingress-nginx in Digital Ocean
[setup details](https://kubernetes.github.io/ingress-nginx/deploy/#digital-ocean)
> kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.48.1/deploy/static/provider/do/deploy.yaml

### update k8s yaml changes in repo master branch
- push k8s yamls changes to master branch **directly** w/o pull request
kubectl get pods
kubectl logs <pod name>

### troubleshooting if one of the pods is not running
kubectl get pods
kubectl logs <pod name>
kubectl describe pod <pod name>

## Cloud LoadBalancer

## Purchase domain name
Dashboard > +'Networking' >
    |Load Balancers| > click on one of them >
        copy LoadBalancer IP
        |Droplets|Graphs|Settings
### setup domain name
set DNS server to custom DNS in domains provider dashboard
- ns1.digitalocean.com
- ns2.digitalocean.com
- ns3.digitalocean.com
### setup domain name
Dashboard > +'Networking' >
    |Domains| > 'Add a domain' > 'Enter doamin'='bought.domainname' > +'Add Domain'
    'Create new record' > 
    |A|
    'HOSTNAME'='@' > 'WILL DIRECT TO'='LoadBalancer name' > 'TTL'='30' > +'Create Record'
    |CNAME|
    'HOSTNAME'='www' > 'IS AN ALIAS OF'='@' > 'TTL'='30' > +'Create Record'

https://github.com/digitalocean/digitalocean-cloud-controller-manager/blob/master/docs/controllers/services/examples/README.md#accessing-pods-over-a-managed-load-balancer-from-inside-the-cluster


github.com/user_name/repo_name
|Actions|
deploy-manifests on: push
    build

## future development workflow
new changes in dev branch > push > pull request > accept > deployment to cloud

# deleting LoadBalancer which costs 10$/month. should be deleted if unused
Dashboard > +'Networking' >
    |Load Balancers| > 
    LoadBalancer ROW > +'More V' > 'Destroy'
# deleting Kubernates which costs 30$/month. should be deleted if unused
Dashboard > +'Kubernates' >
    'Kubernates Clusters' > 
    Cluster ROW > +'More V' > 'Destroy'

service Dockerfile for prod
node index.ts
client Dockerfile for prod
npm run build


