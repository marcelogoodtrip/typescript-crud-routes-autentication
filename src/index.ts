import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({
        foo: 'Executando em modo de desenvolvimento!'
    });
});

app.listen(3000, () => {
    console.log('Running Aplication on port: 3000');
});