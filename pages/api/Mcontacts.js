import nextConnect from 'next-connect';
import middlewareDatabase from '../../middleware/mongoMW';

const handler = nextConnect();

handler.use(middlewareDatabase);

handler.get(async (req, res) => {
  let doc = await req.db.collection('contacts').findOne();
  // console.log(doc);
});

handler.post(async (req, res) => {
  console.log('req.body:', req.body);
  let data = req.body;

  let contact = JSON.parse(data);

  let doc = await req.db.collection('contacts').insertOne(contact);

  res.status(200).end();
});

export default handler;
