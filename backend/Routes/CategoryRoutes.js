import express from 'express'
import { getExpenseInfo,postExpense } from '../Controllers/ExpenseController.js'

const router = express.Router()

router.route('/expense').get(getExpenseInfo)

router.route('/expense').post(postExpense)

export default router
