import logger from '../utils/logger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createPerson } from '../service/person';
import { CreatePersonInput } from '../schema/person';

export async function createPersonHandler(
  req: Request<{}, {}, CreatePersonInput['body']>,
  res: Response
) {
  try {
    const message = await createPerson(req.body);
    return res.status(StatusCodes.CREATED).json({ message });
  } catch (e: any) {
    logger.error(e);
    return res.status(StatusCodes.CONFLICT).send(e.message);
  }
}
