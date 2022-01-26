
import mongoose from 'mongoose'
import portfolioSchema from './Portfolio'

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  portfolios: [portfolioSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
})

const customerModel = mongoose.model('Customer', customerSchema)

export default customerModel
