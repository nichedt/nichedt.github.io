import { Router, Request, Response } from 'express';
const router: Router = Router();

export interface Login {
    username?: string;
    password: string;
}

router.get('/', (req: Request, res: Response) => {
    console.log(req.params);
    let { fname, lname } = req.query;
    res.send(`${fname}, ${lname}`);
});

router.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    let { username, password } = req.body;
    console.log(username, password);
    res.send("fuck off");
});

export const LoginRoute: Router = router;
