import db from '../utils/db';
import { CreatePersonInput } from './../schema/person';

export async function createPerson({
  fullname,
  dob,
  photo,
  isAlive,
  generationNo,
}: CreatePersonInput['body']) {
  const connection = await db();
  try {
    const text =
      'INSERT INTO person(fullName, dob, photo, isAlive, generationNo) VALUES($1, $2, $3, $4, $5) RETURNING *';
    const values = [fullname, dob, photo, isAlive, generationNo];

    const res = await connection.query(text, values);
    return res.rows[0].message;
  } catch (error) {
    console.error(error);
  } finally {
    await connection.end();
  }
}
