import express from 'express';
import cors from 'cors';
import router from './routes/index';
import { pino } from 'pino';
import config from './config';
import session from 'express-session';
import passport from 'passport';
import './passport';

const app = express();
const logger = pino({ transport: { target: 'pino-pretty' } });

app.use(cors());
app.use(
  session({
    secret: config.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use('/api', router);

//example for protected route
// '/dashboard' will be changed by frontend url
app.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.json({ user: req.user });
});

app.listen(config.PORT, () => {
  logger.info(`Server running at http://localhost:${config.PORT}`);
});
