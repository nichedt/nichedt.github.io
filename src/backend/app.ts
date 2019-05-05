import express from 'express';
import path from 'path';
import {Home} from './routes/home';

const app: express.Application = express();
const port: number = 8080;

app.use(express.static('dist'));

const dir: string = path.join(__dirname, 'public');
app.use(express.static(dir));

app.use('/api', Home);

app.listen(port, (err?: string): void => {
    if (err) return console.error(err);
    return console.log(`server is listening on ${port}`);
});