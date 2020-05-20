exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Netlify Addons Reference Implementation',
      description: 'A test service for building addons.',
      // if you need to authenticate, add the URL here
      // Netlify will provide a JWT
      // https://github.com/netlify/addons#add-on-authenication
      admin_url: '',
      config: {},
    }),
  };
};
