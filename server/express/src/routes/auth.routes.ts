import { NextFunction, Request, Router, Response } from 'express';
import passport from 'passport';
import config from '../config';

const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: `http://localhost:${config.CLIENT_PORT}/auth`,
  }),
  (req, res) => {
    res.redirect(`http://localhost:${config.CLIENT_PORT}/chat`);
  }
);

router.get('/logout', (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: 'Logged out successfully' });
  });
});

router.get('/status', (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    const user = req.user as any;
    res.json({
      authenticated: true,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        profilePicture: user.profilePicture,
      },
    });
  } else {
    res.json({ authenticated: false });
  }
});

export default router;
