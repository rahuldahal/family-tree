import dotenv from 'dotenv';
import supertest from 'supertest';
import createServer from '../utils/server';

jest.mock('pino', () => jest.fn());
// other mocks

const app = createServer();
dotenv.config();

beforeAll(async () => {
  const DB_URI = process.env.DB_URI as string;
  // connect to the DB
});

describe('[Unit] to test', () => {
  describe('[condition #1]', () => {
    it('[expectation]', () => {
      //  function calls & other logic

      const res = await supertest(app).patch('/[endpoint]');

      // expect(res.statusCode).toBe(400);
    });
  });

  describe('[condition #2]', () => {
    it('[expectation]', () => {
      //  function calls & other logic

      const res = await supertest(app).patch('/[endpoint]');

      // expect(res.statusCode).toBe(404);
    });
  });
});

afterAll(async () => {
  // disconnect from database
  // delete/reset database, if required
});
