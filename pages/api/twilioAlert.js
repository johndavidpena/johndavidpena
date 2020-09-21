import nextConnect from 'next-connect';
import middlewareTwilio from '../../middleware/twilioMW';

const handler = nextConnect();

handler.use(middlewareTwilio);

handler.post(async (req, res) => {
  let client = req.twilioClient;

  let data = req.body;
  let contact = JSON.parse(data);
  let firstName = contact.firstName;
  let lastName = contact.lastName;

  client.messages
    .create({
      from: '+19152332022',
      to: '+19153553477',
      body: `${firstName} ${lastName} submitted at JDP!`
    })
    .catch(err => {
      console.log(err);
    });
});

export default handler;
