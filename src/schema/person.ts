// schema for incoming data from the request object
import { ALPHA, DATE } from '../constants';
import { boolean, number, object, string, TypeOf } from 'zod';

// TODO: add error messages to constants/ folder and try to make them DRY
export const createPersonSchema = object({
  body: object({
    fullname: string().regex(ALPHA, {
      message: 'Full name is not of valid type',
    }),
    dob: string().regex(DATE, {
      message: 'Date of birth is not of valid type',
    }),
    photo: string().url(),
    isAlive: boolean(),
    generationNo: number().int({
      message: 'Generation number must be an integer',
    }),
  }),
});

export type CreatePersonInput = Omit<
  TypeOf<typeof createPersonSchema>,
  'body.passwordConfirmation'
>;
