import express, { Request, Response } from 'express';
import { Document, Types } from 'mongoose';
import { newModel } from './routers/model';
import formatID from './utils/formatID';

const app = express();
const json = express.json();

// interfaces
interface Pool {
  _id: Types.ObjectId; 
}

// middleware
app.use(json);

// routes
app.get('/budget', async (req: Request, res: Response) => {
  try {
    const data: Document<Pool>[] = await newModel.find(); 
    const transformedData = data.map((doc) => formatID({ ...doc.toObject(), _id: doc._id.toString() }));
    res.json(transformedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error!!' });
  }
});

export default app;
