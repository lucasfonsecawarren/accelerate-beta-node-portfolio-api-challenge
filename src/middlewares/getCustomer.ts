import { Request, Response, NextFunction } from 'express'
import Customer from '../models/Customer'

const getCustomer = async (req: Request, res: Response, next: NextFunction) => {
  const customerId = req.header('customer-id')
  const customer = await Customer.findById(customerId)
  if (!customer) return res.status(401).end()
  Object.assign(req, { customer })
  next()
}

export default getCustomer
