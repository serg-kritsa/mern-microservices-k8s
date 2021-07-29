
npm i stripe@8.161.0

https://dashboard.stripe.com/register
sign in

https://dashboard.stripe.com/test/dashboard > +'Developers' > +'API keys' > 
    'API keys' > 'Standard keys' > copy secret key token
left hand side column 

kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=secret-key
kubectl get secrets

