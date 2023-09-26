import logger from '../utils/logger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CreateUserInput } from '../schema/user';
import { createUser } from '../service/user';

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response
) {
  try {
    // const { id } = await createUser(req.body);
    // return res.status(StatusCodes.CREATED).json({ id });
  } catch (e: any) {
    logger.error(e);
    return res.status(StatusCodes.CONFLICT).send(e.message);
  }
}
