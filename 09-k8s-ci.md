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

### Using command-line tool
install doctl cli
API > 
    'Applications & API' > |Tokens/Keys| > +'Generate New Token'
        'Token Name'='my_token_name' > +'Generate Token'
            copy generated token
    'Applications & API' > |Tokens/Keys| > +'Generate New Token'
        'Token Name'='my_github_token_name' > +'Generate Token'
            copy generated token
doctl auth init my_generated_token 

### Switching to cloud context
doctl kubernates cluster kubeconfig save my_cluster_name
kubectl get nodes

kubectl get pods
kubectl config view
    `contexts:` section
    `- context:`
            `cluster:`
            `user:`
        `name:` cluster_context_name
### Switching back to local context
kubectl config use-context docker-desktop


github.com/user_name/repo_name/settings/secrets
    +'Add a new secret' > 
        'Name'='DOCKER_USERNAME' > 'Value'='docker_username' > +'Add secret'
    +'Add a new secret' > 
        'Name'='DOCKER_PASSWORD' > 'Value'='docker_password' > +'Add secret'
    +'Add a new secret' > 
        'Name'='DIGITALOCEAN_ACCESS_TOKEN' > 'Value'='my_github_token_name' > +'Add secret'

### in cloud context
kubectl config view
kubectl config use-context cloud_context_name
kubectl create secret generic jwt-secret --from-literal JWT_KEY=secret-key
kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=secret-key
[https://kubernetes.github.io/ingress-nginx/deploy/#digital-ocean]
k8s-dev & k8s-prod should be committed to master branch directly w/o pull request
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.48.1/deploy/static/provider/do/deploy.yaml
kubectl get pods
kubectl logs pod_name
