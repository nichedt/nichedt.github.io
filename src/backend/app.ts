import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import path from 'path';
import mongoose from 'mongoose';

import { HomeRoute } from './routes/home';
import { LoginRoute } from './routes/login';
import { SignupRoute } from './routes/signup';
import { UserRoute } from './routes/user'

require('dotenv').config()
require('./auth');

mongoose.connect("mongodb://127.0.0.1:27017/passport-jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

const app: express.Application = express();
const port: number = 8080;

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dir: string = path.join(__dirname, 'public');
app.use(express.static(dir));

app.use('/api', HomeRoute);
app.use('/login', LoginRoute);
app.use('/signup', SignupRoute);
app.use('/user',
    passport.authenticate('jwt', { session: false }),
    UserRoute);

app.listen(port, (err?: string): void => {
    if (err) return console.error(err);
    return console.log(`server is listening on ${port}`);
});
