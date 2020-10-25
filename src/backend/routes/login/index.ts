import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jsonfile from 'jsonfile'
import path from 'path';

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
        jsonfile.readFile(usersFile, (err, obj) => {
            if(obj.filter(item => item.username === user.username).length) {
                res.status(500).send()
            } else {
                obj.push(user);
                jsonfile.writeFile(usersFile, obj, (err) => res.status(err ? 500 : 201).send())
            }
        })
    } catch {
        res.status(500).send()
    }
});

router.get('/', (req, res) => {
    jsonfile.readFile(usersFile, (err, obj) => {
        if(err) return res.status(500).send();
        res.json(obj);
        res.status(200).send();
    });
});

router.post('/login', async (req, res) => {
    // const user = users.find(user => user.username === req.body.username)
    // if (user == null) {
    //     return res.status(400).send('Cannot find user')
    // }
    // try {
    //     if(await bcrypt.compare(req.body.password, user.password)) {
    //         res.send('Success')
    //     } else {
    //         res.send('Not Allowed')
    //     }
    // } catch {
    //     res.status(500).send()
    // }
});

export const LoginRoute: Router = router;
