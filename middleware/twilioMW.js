import nextConnect from 'next-connect';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

async function twilio(req, res, next) {
  req.twilioClient = client;

  return next();
}

const middleware = nextConnect();

middleware.use(twilio);

export default middleware;
