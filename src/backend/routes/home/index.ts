import { Router, Request, Response } from 'express';
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  // use interface
  console.log('WE ARE HERE');
  console.log(req, res);
  res.send({ name: 'I Love Joanna' });
});

router.get('/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.send({ name: `Hello, ${name}` });
});

export const HomeRoute: Router = router;
