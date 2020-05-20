// TODO
// GET
// PUT
// DELETE
// POST

exports.handler = async (event) => {
  const method = event.httpMethod;
  console.log(JSON.stringify(event));

  switch (method) {
    // right now, the build webhook has to be manually enabled or disabled by David Wells
    // OAuth scopes will help us solve this problem by letting the user decide what should and shouldn’t be enabled
    // https://github.com/netlify/addons#post-instances---create-add-on-instance
    case 'POST':
      return {
        statusCode: 201,
        body: JSON.stringify({
          // required — a way to identify the user in your system (e.g. user ID)
          id: 123,

          // all other fields are optional
          message: 'This will be sent back to the user',
          // this will get proxied as `/.netlify/addon-namespace`
          endpoint: 'https://learnwithjason.dev',
          env: {
            // env vars passed back will NOT be visible in the UI!
            // they DO work in Netlify Dev, though
            // feature request exists to show this in the UI — should bump this
            SERVICE_API_KEY: '<your user’s API key or whatever>',
          },
          snippets: [
            // we can add any HTML we want here, e.g. embed a script or some styles in the site
          ],
        }),
      };

    case 'PUT':
      // const body = JSON.parse(event.body);

      console.log(event.body);
      return {
        statusCode: 200,
        // you MUST return all settings here — they’ll be removed otherwise
        body: JSON.stringify({
          env: {
            // env vars passed back will NOT be visible in the UI!
            // they DO work in Netlify Dev, though
            // feature request exists to show this in the UI — should bump this
            SERVICE_API_KEY: '<your user’s API key or whatever>',
          },
          snippets: [
            // we can add any HTML we want here, e.g. embed a script or some styles in the site
          ],
        }),
      };

    case 'DELETE':
      return {
        statusCode: 204,
        body: 'deleted',
      };

    case 'GET':
      return {
        statusCode: 200,
        body: JSON.stringify({
          env: {
            // env vars passed back will NOT be visible in the UI!
            // they DO work in Netlify Dev, though
            // feature request exists to show this in the UI — should bump this
            SERVICE_API_KEY: '<your user’s API key or whatever>',
          },
          snippets: [
            // we can add any HTML we want here, e.g. embed a script or some styles in the site
          ],
        }),
      };
  }
};
