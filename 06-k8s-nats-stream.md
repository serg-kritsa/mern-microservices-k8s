(NATS STREAMING CONCEPTS - Introduction)[https://docs.nats.io/nats-streaming-concepts/intro]
(nats-streaming docker image)[https://hub.docker.com/_/nats-streaming]

.\skaffold dev
(2nd terminal) kubectl get pods

[https://www.npmjs.com/package/node-nats-streaming]
(2nd terminal) cd /path/to/nats-test
(2nd terminal) npm i
(2nd terminal) kubectl get pods
(2nd terminal) kubectl port-forward nats_depl_name 4222:4222
(3rd terminal) npm run publish
