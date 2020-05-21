# Netlify Addons Reference Implementation

slug: addon-example

we have to manually register addons in IRB, slug is chosen manually

after creation, we get a JWT secret that can be used to validate requests


workflow:
1. run `ntl addons:create addon-example` first
   - the service needs to create an account at this point — they won’t be authenticated yet, so this is pretty weird. We basically need to create an anonymous account and associate the Netlify site ID with it. this is not ideal, but it’s what we’ve got right now. create a user ID and send that back — Netlify will hold onto it and send it so you can associate this account with a real user
2. authenticate by running `ntl addons:auth addon-example`, which sends a JWT in the URL hash to an endpoint of your choosing. The JWT includes the site ID and whatever user ID you created in the `addons:create` step. This is where the user would create an account with your service — the unique ID you generated and the Netlify site ID can be used to map the Netlify-created account with this one.




Links:
- https://github.com/netlify/addons
- https://app.netlify.com/sites/addons-reference/functions
- https://app.netlify.com/sites/laughing-leakey-99b4a1