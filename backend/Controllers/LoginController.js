import bcrypt from 'bcrypt'
import validator from 'express-validator';
const { validationResult } = validator;
import LoginModel from '../Model/LoginModel.js'

export const getCredentials = (req, res) => {
    LoginModel.find()
        .then(result => {
            res.send({
                status: 'success',
                credentials: result
            })
        })
}

export const getUsername = async (req, res) => {
    const userInfo = await LoginModel.find( {}, { username:1} )
    res.status(200).json({ allUserInfo:userInfo })
}

export const signUp = async (req, res) => {
    const { email, username, password } = req.body
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(422).send('Not sent');
    }
    else {
        const existingEmail = await LoginModel.findOne({ email })
        const existingUsername = await LoginModel.findOne({ username })
        if (existingEmail) {
            return res.status(200).json({ message: 'This email is already registered', status: 'error' })
        }
        else if (existingUsername) {
            return res.status(200).json({ message: 'A user with this username already exists', status: 'error' })
        }
        else {
                const passwordEncrypted = await bcrypt.hash(password, 12)
                const loginDetails = await new LoginModel({
                    email, username, password: passwordEncrypted
                })
    
                loginDetails.save()
                return res.status(200).json({ message: 'You are registered successfully', status: 'success' })
        }
    }
}

export const signIn = async (req, res) => {
    const { username, password } = req.body

    const existingUser = await LoginModel.findOne({ username })
    if (!existingUser) {
        return res.status(200).json({ message: 'This user does not have a registered account', status: 'error' })
    }

    const passwordCorrect = await bcrypt.compare(password, existingUser.password)
    if (!passwordCorrect) {
        return res.status(200).json({ message: 'Invalid credentials', status: 'error' })
    }
    else {
        return res.status(200).json({ status:'success' })
    }
}

