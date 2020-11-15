import { Router, Request, Response } from 'express';
import passport from 'passport';
const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
  passport.authenticate('signup', { session: false }, (err, user, info) => {
    const { message } = info;
    if (err || !user) {
      res.json({ message });
    } else {
      res.json({ message, user });
    }
  })(req, res);
});

export const SignupRoute: Router = router;
