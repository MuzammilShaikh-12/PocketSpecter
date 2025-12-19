import { Router } from 'express';
import helloRouter from './hello.route';
import authRouter from './auth.routes';
import userRouter from './user.routes';

const router = Router();

router.use('/hello', helloRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);

export default router;
