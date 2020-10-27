import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import path from 'path';
import { loadJsonFile, writeToJsonFile } from "../../utils/jsonFileHandler";

const usersFile = path.join(__dirname, '../../files/users.json');
const router: Router = Router();

export interface LoginCredentials {
    username: string;
    password: string;
}

router.post('/', async (req: Request, res: Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user: LoginCredentials = { username: req.body.username, password: hashedPassword }
        const data = await loadJsonFile(usersFile);
        if(data.filter(item => item.username === user.username).length) {
            res.status(500).send()
        } else {
            data.push(user);
            const err = await writeToJsonFile(usersFile, data);
            res.status(err ? 500 : 201).send();
        }
    } catch {
        res.status(500).send()
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await loadJsonFile(usersFile);
        res.json(data);
        res.status(200).send();
    } catch(e) {
        res.status(500).send();
    }
});

router.post('/login', async (req, res) => {
    try {
        const data = await loadJsonFile(usersFile);
        const user = data.find(user => user.username === req.body.username)
        if (user == null) {
            return res.status(400).send('Cannot find user')
        }
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch(e) {
        res.status(500).send()
    }
});

export const LoginRoute: Router = router;
