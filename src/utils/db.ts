import * as dotenv from 'dotenv';
import logger from './logger';
import { Pool } from 'pg';
import { log } from 'console';

dotenv.config();

async function db() {
  const DB_HOST = process.env.DB_HOST as string;
  const DB_PORT = parseInt(process.env.DB_PORT || '5432') as number;
  const DB_NAME = process.env.DB_NAME as string;
  const DB_USER = process.env.DB_USER as string;
  const DB_PASSWORD = process.env.DB_PASSWORD as string;

  let pool;
  try {
    pool = new Pool({
      host: DB_HOST,
      port: DB_PORT,
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }

  return pool;
}

export default db;

interface GenericObject {
  [key: string]: any;
}

export async function createTable(name: string, columns: GenericObject) {
  try {
    const connection = await db();
    const mutatedColumns = [];

    // mutate the columns object to string
    for (let key in columns) {
      mutatedColumns.push(`${key} ${columns[key]}`);
    }

    const stringifiedColumns = mutatedColumns.join(); // Join them with ','
    const query = `CREATE TABLE ${name} (${stringifiedColumns});`;

    logger.info(`Running query: ${query}`);
    await connection.query(query);
    logger.info(`Created table: ${name}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
