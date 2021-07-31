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