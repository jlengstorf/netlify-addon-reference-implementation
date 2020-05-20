exports.handler = async () => {
  return {
    statusCode: 200,
    body: 'This is a proxied request from your Netlify addon!',
  };
};
