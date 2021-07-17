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