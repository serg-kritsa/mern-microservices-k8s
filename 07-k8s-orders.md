cd /path/to/k8s/
docker build -t sergkritsa/orders ..\..\orders\

cd ..\..\
kubectl get pods

.\skaffold.exe dev

## update common package w/ order status enum
ticketing\common
npm run pub
cd ../orders
npm update @sknn/common


## testing nats listeners manually
cd ticketing\
.\skaffold dev
(2nd terminal) `kubectl get pods` to make sure that nats is up and running
POST https://ticketing.dev/api/users/signup             {"email": "q@q.qq","password": "qqqq"}
GET  https://ticketing.dev/api/users/currentuser
POST https://ticketing.dev/api/tickets/                 {"title": "Q","price": 10}
PUT https://ticketing.dev/api/tickets/use_ticket_id_from_previous_response                 {"title": "Q","price": 55}


cd ../orders
npm i mongoose-update-if-current@1.4.0
npm update @sknn/common
POST https://ticketing.dev/api/users/signup             {"email": "q@q.qq","password": "qqqq"}
GET  https://ticketing.dev/api/users/currentuser
POST https://ticketing.dev/api/tickets/                 {"title": "Q","price": 10}


POST https://ticketing.dev/api/users/signup             {"email": "q@q.qq","password": "qqqq"}
GET  https://ticketing.dev/api/users/currentuser
POST https://ticketing.dev/api/tickets/                 {"title": "Q","price": 10}
POST https://ticketing.dev/api/orders/                 {"ticketId": "use_ticket_id_from_previous_response"}


POST https://ticketing.dev/api/users/signup             {"email": "q@q.qq","password": "qqqq"}
GET  https://ticketing.dev/api/users/currentuser
POST https://ticketing.dev/api/tickets/                 {"title": "Q","price": 10}
POST https://ticketing.dev/api/orders/                 {"ticketId": "use_ticket_id_from_previous_response"}
