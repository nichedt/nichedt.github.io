import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import {HomeRoute} from './routes/home';
import {LoginRoute} from './routes/login';

const app: express.Application = express();
const port: number = 8080;

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dir: string = path.join(__dirname, 'public');
app.use(express.static(dir));

app.use('/api', HomeRoute);
app.use('/users', LoginRoute);

app.listen(port, (err?: string): void => {
    if (err) return console.error(err);
    return console.log(`server is listening on ${port}`);
});
