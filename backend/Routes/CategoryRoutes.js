import express from 'express'
import { getCategoryInfo,postCategory,updateCategory,deleteCategory } from '../Controllers/CategoryController.js'

const router = express.Router()

router.route('/category').get(getCategoryInfo)

router.route('/category').post(postCategory)
 
router.route('/category').patch(updateCategory)

router.route('/category').delete(deleteCategory)

export default router
