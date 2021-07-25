## login in existing account
https://www.npmjs.com/login

### create organization in npmjs.org
* https://www.npmjs.com/org/create
'Create a New Organization'
Name='some_name'
+'Create'
* skipping invitation to
'Invite some interesting people to'
+'Skip'

## creating package
cd /path/to/ticketing
mkdir common
cd common
npm init -y
add `@sknn/` to package name
npm login
npm publish --access public

## ts init config
tsc --init
npm i typescript del-cli --save-dev
tsconfig.json > compilerOptions: "declaration": true, "outDir": "./build"
npm run build

### build project
>>> npm i -g typescript ts-node
./node_modules/.bin/tsc && npm version patch && npm publish

cd ticketing/auth
npm i @sknn/common

## rebuild & publish common package
cd /path/to/ticketing/common
npm run pub
cd /path/to/ticketing/tickets
npm update @sknn/common

### make sure that updated package is in use
if newer version was published, run `npm update @sknn/common`
skaffold will rebuild image
kubectl get pods
kubectl exec -it pod_name sh
cd node_modules/@sknn/common
cat package.json | grep '@sknn/common@'

## steps for updating common package
ticketing\common
npm run pub
cd ../tickets
npm update @sknn/common
cd ../orders
npm update @sknn/common
