import logger from './logger';
import { createTable } from './db';
import { child, person } from '../constants/tableColumns';

(async function () {
  // connect to db and create tables
  try {
    await createTable('person', person);
    await createTable('child', child);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
})();
