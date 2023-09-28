import logger from './logger';
import { createTable } from './db';
import { person } from '../constants/tableColumns';

(async function () {
  // connect to db and create tables
  try {
    await createTable('person', person);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
})();
