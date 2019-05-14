import { Router, Request, Response } from 'express';
const router: Router = Router();

export interface Login {
    username?: string;
    password: string;
}

router.get('/', (req: Request, res: Response) => {
    res.send("login here");
});

router.post('/', (req: Request, res: Response) => {
    let { username, password } = req.params as Login;
    console.log(username, password);
});

export const LoginRoute: Router = router;
