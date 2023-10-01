import { Express, Request, Response } from 'express';
import { createPersonSchema } from './schema/person';
import { validate } from './middleware/validateResource';
import { createPersonHandler } from './controller/person';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export default function routes(app: Express) {
  app.get('/health', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send(ReasonPhrases.OK);
  });

  app.post('/', validate(createPersonSchema), createPersonHandler);
  // other routes
}
