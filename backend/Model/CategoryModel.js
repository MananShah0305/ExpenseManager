import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    category_name: String,
    category_budget: Number,
},{collection:'category-data'})

const categoryModel = mongoose.model('Category', categorySchema)

export default categoryModel