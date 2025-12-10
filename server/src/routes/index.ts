import { Router } from 'express';
import helloRouter from './hello.route';
import authRouter from './auth.routes';

const router = Router();

router.use('/hello', helloRouter);
router.use('/auth', authRouter);

export default router;
