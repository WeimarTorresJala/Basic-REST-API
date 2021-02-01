import { Request, Response } from 'express';
import express = require("express");

export const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from express and typescript')
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
