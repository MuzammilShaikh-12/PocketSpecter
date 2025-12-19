import { Router, Request, Response } from 'express';
import { isAuthenticated } from '../middleware/auth';

const router = Router();

router.get('/profile', isAuthenticated, (req: Request, res: Response) => {
  const user = req.user as any;
  res.json({
    id: user._id,
    email: user.email,
    name: user.name,
    profilePicture: user.profilePicture,
    lastLogin: user.lastLogin,
    createdAt: user.createdAt,
  });
});

export default router;
