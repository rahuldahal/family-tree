// schema for incoming data from the request object

import { validationErrors } from '../constants/errorMessages';
import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    fullname: string().min(1, { message: 'Full name is required' }),
    email: string().email({ message: 'Invalid email address' }),
    password: string().min(8, {
      message: 'Password must be at least 8 characters long',
    }),
    passwordConfirmation: string(),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: validationErrors.passwordsNoMatch,
    path: ['passwordConfirmation'],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  'body.passwordConfirmation'
>;
