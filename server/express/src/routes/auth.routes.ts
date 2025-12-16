import { Request, Router } from 'express';
import passport from 'passport';
import config from '../config';

const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: `http://localhost:${config.CLIENT_PORT}/login`,
  }),
  (req, res) => {
    res.redirect(`http://localhost:${config.CLIENT_PORT}/dashboard`);
  }
);

export default router;
