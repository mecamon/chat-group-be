import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send({ message: "Allo! Catch-all routes." });
});

export default app
