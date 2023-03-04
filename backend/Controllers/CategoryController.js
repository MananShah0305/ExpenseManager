import CategoryModel from '../Model/CategoryModel.js'
import validator from 'express-validator';
const { validationResult } = validator;

export const getCategoryInfo = (req, res) => {
    CategoryModel.find()
        .then(result => {
            res.send({
                status: 'success',
                info: result
            })
        })
}

export const postCategory = async (req, res) => {
    const { category_name, category_budget } = req.body
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(422).send('Not sent');
    }
    else {
        const existingCategory = await CategoryModel.findOne({ category_name })
        if (existingCategory) {
            return res.status(400).json({ message: 'This category is already created', status: 'error' })
        }
        else {
            const categoryDetails = await new CategoryModel({
                category_name, category_budget
            })

            categoryDetails.save()
            return res.status(200).json({ status: 'success' })
        }
    }
}

export const updateCategory = async (req, res) => {
    const { category_name } = req.body

    CategoryModel.findOneAndDelete({ category_name: category_name }, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(docs);
        }
    });

}

export const deleteCategory = async (req, res) => {
    const { category_name } = req.body

    CategoryModel.deleteOne({ category_name: category_name });

}
