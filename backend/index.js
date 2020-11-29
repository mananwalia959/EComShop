import express from 'express';
import baseRouter from './api/routes/baseRouter.js';

const app = express();
app.disable('x-powered-by');

//for cors
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

//the part you are probably looking for :)
//contains mappings to different routes
app.use('/api', baseRouter);

app.listen(5000, () => {
    console.log('server started');
});
