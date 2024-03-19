import express, { Request, Response, NextFunction } from 'express';
import { getCustomers } from './handlers/getAllCustomers';

const customersRouter = express.Router();
customersRouter.get('/', getAllCustomers);


async function getAllCustomers(req: Request, res: Response, next: NextFunction) {
  try {
    const results = await getCustomers();
    res.json(results);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
}

export { customersRouter };