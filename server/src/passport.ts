import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import config from './config';
import User from './models/User';

passport.use(
  new GoogleStrategy(
    {
      clientID: config.CLIENT_ID as string,
      clientSecret: config.CLIENT_SECRET as string,
      callbackURL: 'http://localhost:3000/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      //store the user is database or session here
      //user details will be in profile, giving you a dummy ref below
      const google_user = {
        id: profile.id,
        displayName: profile.displayName,
        email: profile.emails?.[0].value,
      };

      let user = await User.findOne({ googleId: profile.id });

      if (user) {
        user.googleId = profile.id;
        await user.save();
      } else {
        user = await User.create({
          googleId: profile.id,
          email: profile.emails?.[0].value,
          name: profile.displayName,
          imageUrl: profile.photos?.[0].value,
        });
      }

      return done(null, user);
    }
  )
);

passport.serializeUser((user: any, done) => {
  console.log(user);
  done(null, user._id.toString());
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    // .populate('chats').populate('documents'); for time being keeping it simple
    if (!user) {
      done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error);
  }
});
