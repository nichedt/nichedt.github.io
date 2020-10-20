import { Router, Request, Response } from 'express';
const router: Router = Router();

export interface Home {
   name?: string;
}

router.get('/', (req: Request, res: Response) => {
    // use interface
    console.log("WE ARE HERE");
    console.log(req, res);
    res.send({ name: 'I Love Joanna' } as Home);
});

router.get('/:name', (req: Request, res: Response) => {
    let { name } = req.params;
    res.send({ name: `Hello, ${name}` });
});

export const HomeRoute: Router = router;
