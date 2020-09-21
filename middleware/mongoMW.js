// https://developer.mongodb.com/how-to/nextjs-building-modern-applications
import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  // console.log('from Mdatabase.js middleware, client is', client);

  if (!client.isConnected()) await client.connect();

  req.dbClient = client;
  req.db = client.db('mimasmusic');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
