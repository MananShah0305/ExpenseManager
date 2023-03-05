import express from 'express'
import { getExpenseInfo,postExpense,editExpense,deleteExpense } from '../Controllers/ExpenseController.js'

const router = express.Router()

router.route('/expense').get(getExpenseInfo)

router.route('/expense').post(postExpense)

router.route('/expense').put(editExpense)

router.route('/expense').patch(deleteExpense)

export default router
