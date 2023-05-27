import {
    Schema,
    model
} from 'mongoose'

const categorySchema = new Schema({
    name: String,
    offers: [String]
})

export default model('Category', categorySchema)