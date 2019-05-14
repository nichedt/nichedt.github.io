import { Router, Request, Response } from 'express';
const router: Router = Router();

export interface Home {
   name?: string;
}

router.get('/', (req: Request, res: Response) => {
    // use interface
    res.send({ name: 'I Love Christine' } as Home);
});

router.get('/:name', (req: Request, res: Response) => {
    let { name } = req.params;
    res.send({name: `Hello, ${name}`});
});

export const HomeRoute: Router = router;
