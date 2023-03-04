import mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema({
    username:String,
    expense_name: String,
    expense_amount: Number,
    expense_type: String,
},{collection:'expense-data'})

const expenseModel = mongoose.model('Expense', expenseSchema)

export default expenseModel