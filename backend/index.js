import express from 'express';

const app = express();
app.disable('x-powered-by');

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(5000, () => {
    console.log('server started');
});
