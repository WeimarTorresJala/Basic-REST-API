import { Request, Response } from 'express';
import express = require("express");

const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from express and typescript 1')
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
