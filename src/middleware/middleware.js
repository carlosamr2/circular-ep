'use server';

import { RateLimiterMemory } from 'rate-limiter-flexible';

const rateLimiter = new RateLimiterMemory({
  points: 1,
  duration: 300,
});

export const rateLimiterMiddleware = async (req, res, next) => {
  try {
    await rateLimiter.consume(req.ip);
    next();
  } catch (err) {
    console.log("Demasiadas peticiones")
    res.status(429).json({ message: 'Demasiadas peticiones, intenta nuevamente más tarde.' });
  }
};