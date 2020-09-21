import nextConnect from 'next-connect';
import middlewareTwilio from '../../middleware/twilioMW';

const handler = nextConnect();

handler.use(middlewareTwilio);

handler.post(async (req, res) => {
  // res.header('Content-Type', 'application/json');
  let client = req.twilioClient;

  let data = req.body;
  let contact = JSON.parse(data);
  let contactPhone = `+1${contact.phone}`;
  let contactName = contact.firstName;

  client.messages
    .create({
      from: '+19152332022',
      to: contactPhone,
      body: `Hi ${contactName}, thanks for submitting your contact info!`
    })
    .then(() => {
      console.log('Submitted');
    })
    .catch(err => {
      console.log(err);
    });
});

export default handler;
