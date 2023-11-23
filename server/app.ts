import express, { Request, Response } from 'express';
import { newModel } from './routers/model';

const app = express();
const json = express.json();

interface RequestHandler {
    (req: Request, res: Response): any;
}

// middleware
app.use(json);

// routes
app.get('/budget', async (req: Request, res: Response) => {
    try{
        const data = await newModel.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error!!'})
    }
});

export default app;
