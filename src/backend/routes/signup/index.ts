import { Router, Request, Response } from 'express';
import passport from 'passport';
const router: Router = Router();

router.post('/',
    passport.authenticate('signup', { session: false }),
    async (req: Request, res: Response) => {
        res.json({
            message: 'Signup successful',
            user: req.user
        });
});


export const SignupRoute: Router = router;
