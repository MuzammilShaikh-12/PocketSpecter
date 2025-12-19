import { Request, Response, NextFunction } from 'express';

export interface AuthenticatedRequest extends Request {
  userId?: string;
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    next();
    return;
  }

  res.status(401).json({
    error: 'Unauthorized',
    message: 'Please log in to access this resource',
  });
};

export const attachUserId = (
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
): void => {
  if (req.isAuthenticated && req.isAuthenticated() && req.user) {
    const user = req.user as { _id: unknown };

    req.userId = user._id?.toString();
  }

  next();
};
