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


POST https://ticketing.dev/api/users/signup             {"email": "q@q.qq","password": "qqqq"}
GET  https://ticketing.dev/api/users/currentuser
POST https://ticketing.dev/api/tickets/                 {"title": "Q","price": 10}
POST https://ticketing.dev/api/orders/                 {"ticketId": "use_ticket_id_from_previous_response"}
POST https://ticketing.dev/api/payments/                 {"token": "tok_visa", "orderId": "use_order_id_from_previous_response"}

Using Postman:
1.  Sign in with your user's credentials.
POST https://ticketing.dev/api/users/signup             {"email": "q@q.qq","password": "qqqq"}
GET  https://ticketing.dev/api/users/currentuser
2. Create a new ticket.
POST https://ticketing.dev/api/tickets/                 {"title": "Q","price": 10}
3. Create an order for that ticket.
POST https://ticketing.dev/api/orders/                 {"ticketId": "use_ticket_id_from_previous_response"}
4. Send payment for that order within 60 seconds of the initial order.
POST https://ticketing.dev/api/payments/                 {"token": "tok_visa", "orderId": "use_order_id_from_previous_response"}

You should see some Skaffold output similar to below:
[tickets] Event published to subject ticket:created
[orders] Message received: ticket:created / orders-service
[orders] Event published to subject order:created
[tickets] Message received: order:created / tickets-service
[expiration] Message received: order:created / expiration-service
[payments] Message received: order:created / payments-service
[expiration] Waiting this many milliseconds to process the job: 59959
[tickets] Event published to subject ticket:updated
[orders] Message received: ticket:updated / orders-service
[orders] Message received: payment:created / orders-service
[payments] Event published to subject payment:created
[expiration] Event published to subject expiration:complete
[orders] Message received: expiration:complete / orders-service