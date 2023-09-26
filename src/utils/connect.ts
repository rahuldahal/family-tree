import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();

async function connect() {
  const DB_URI = process.env.DB_URI as string;

  try {
    // await connection to DB
    logger.info('Connected to the database!');
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

export default connect;
