import mongoose from 'mongoose'
import mongoosePaginate from "mongoose-paginate-v2"

const transactionSchema = new mongoose.Schema({
    day: String,
    time: String,
    url: String
})

transactionSchema.plugin(mongoosePaginate)

export default mongoose.model('transaction', transactionSchema)
