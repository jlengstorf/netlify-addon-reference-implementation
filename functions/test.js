exports.handler = async () => {
  console.log('is this thing on?');
  return {
    statusCode: 200,
    body: 'This is a proxied request from your Netlify addon!',
  };
};
