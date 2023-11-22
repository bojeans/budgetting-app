import express, { Request, Response } from 'express';

const app = express();
const json = express.json();

interface RequestHandler {
    (req: Request, res: Response): any;
}

// middleware
app.use(json);

// routes
app.get('/budget', (req: Request, res: Response) => {
    res.json({ message: "yay it works" });
});

export default app;
