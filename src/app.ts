import express from 'express'
import Customer from './models/Customer'
import getCustomer from './middlewares/getCustomer'

const app = express()
app.use(express.json())

app.get('/', async (req: express.Request, res: express.Response) => {
  res.json('Whats up')
})

app.get('/portfolios/:id', getCustomer, async (req: express.Request, res: express.Response) => {
  const { id } = req.params
  const portfolio = await Customer.findOne({ '_id': id })
  res.json(portfolio)
})

export default app
