import express from 'express';
import cors from 'cors';
import router from './routes/index';
import { Request, Response } from 'express';
import { pino } from 'pino';
import config from './config';
import session from 'express-session';
import passport from 'passport';
import './passport';
import connect from './config/db';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import chatRoutes from './routes/chat.routes';

const app = express();
const logger = pino({ transport: { target: 'pino-pretty' } });

connect();

app.use(
  cors({
    origin: `http://localhost:${config.CLIENT_PORT}`,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
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

//Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    service: 'express-api',
    timestamp: new Date().toISOString(),
    authenticated: req.isAuthenticated(),
  });
});

//example for protected route
// '/dashboard' will be changed by frontend url
app.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.json({ user: req.user });
});

app.use('/auth', authRoutes);

// User routes
app.use('/api/user', userRoutes);

// Chat routes (proxy to FastAPI)
app.use('/api/chat', chatRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
  });
});

app.listen(config.EXPRESS_PORT, () => {
  logger.info(`Server running at http://localhost:${config.EXPRESS_PORT}`);
});
