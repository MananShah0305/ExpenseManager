import ExpenseModel from '../Model/ExpenseModel.js'

export const getExpenseInfo = (req, res) => {
    ExpenseModel.find()
        .then(result => {
            res.send({
                status: 'success',
                info: result
            })
        })
}

export const postExpense = async (req, res) => {
    const { username, expense_name, expense_amount, expense_type } = req.body

    const expenseDetails = await new ExpenseModel({
        username, expense_name, expense_amount, expense_type
    })

    expenseDetails.save()
    return res.status(200).json({ status: 'success' })
}

