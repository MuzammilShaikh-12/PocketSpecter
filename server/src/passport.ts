import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import config from './config';

passport.use(
  new GoogleStrategy(
    {
      clientID: config.CLIENT_ID as string,
      clientSecret: config.CLIENT_SECRET as string,
      callbackURL: 'http://localhost:3000/api/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      //store the user is database or session here
      //user details will be in profile, giving you a dummy ref below
      const user = {
        id: profile.id,
        displayName: profile.displayName,
        email: profile.emails?.[0].value,
      };
      return done(null, user);
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});
