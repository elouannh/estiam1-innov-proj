// @ts-nocheck
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res): void => {
    res.send('Hello World!');
});

app.listen(port, (): void => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});