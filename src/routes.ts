import { Express, Request, Response } from 'express';
import { createUserSchema } from './schema/user';
import { validate } from './middleware/validateResource';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { createUserHandler } from './controller/user';

export default function routes(app: Express) {
  app.get('/health', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send(ReasonPhrases.OK);
  });

  app.post('/users', validate(createUserSchema), createUserHandler);
  // other routes
}
