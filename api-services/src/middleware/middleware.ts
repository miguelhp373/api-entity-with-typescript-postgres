import { Request, Response, NextFunction } from 'express';

export const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {  
  const apiKey = req.headers['x-api-key'] || req.headers['X-Api-Key'];
  if (apiKey && apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
};
