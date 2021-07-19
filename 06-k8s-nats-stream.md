(NATS STREAMING CONCEPTS - Introduction)[https://docs.nats.io/nats-streaming-concepts/intro]
(nats-streaming docker image)[https://hub.docker.com/_/nats-streaming]

.\skaffold dev
(2nd terminal) kubectl get pods

[https://www.npmjs.com/package/node-nats-streaming]
(2nd terminal) cd /path/to/nats-test
(2nd terminal) npm i
(2nd terminal) kubectl get pods
(2nd terminal) kubectl port-forward nats_depl_name 4222:4222
(3.1 terminal) npm run publish
(3.2 terminal) npm run listen
(3.1 terminal) type `rs` + ENTER

only one service in qeueu group will receive an event data

message will be sent member of qeueu group every 30 sec. until receiving acknowlwdge w/ .ack()

(2.2 terminal) kubectl port-forward nats_depl_name 8222:8222
open in browser `localhost:8222/streaming`
channel subscriptions `http://localhost:8222/streaming/channelsz?subs=1` 
if client is offline, message will be delivered later

container args in delpoyment file 
-hbi' - how often server sends hard bit to its client
'-hbt' - how long each client has to respond
'-hbf' - times that each client can fail before server is going to assume that the connection is dead and gone

.setDeliverAllAvailable()               deliver all sent messages before after restarting client
## 3 props together make desirable behavior
.setDeliverAllAvailable()               deliver all sent messages before only 1st time
.setDurableName('accounting-service');  deliver all for durable subscription. don't sent processed messages after restarting client
'queue-group-name',                     don't loose messages after temporarily client disconnect

## cleaning emitted events by restarting nats 
kubectl get pods
kubectl delete pods nats_pod_name
