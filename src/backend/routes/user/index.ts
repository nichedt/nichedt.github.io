import { Router, Request, Response } from 'express';

const router: Router = Router();

router.post('/', async (req: Request, res: Response, next) => {
  res.json({
    message: 'You made it to the secure route',
    user: req.user,
    token: req.query.secret_token,
  });
});

export const UserRoute: Router = router;
