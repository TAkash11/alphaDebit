// Import Config

// Import Static

// Import Middleware

// Import Controllers
import AuthController from '../controllers/auth.controller'

// Import Interface

// Import Validators
import { validator } from '../../../helpers/validator.helper'
import authSchema from '../validation/auth.validator'

// Import Helpers

// Import Transformers

// Import Libraries

// Import Models

// Import Thirdparty
import express from 'express'

const router = express.Router()

router.post('/sign_up', validator(authSchema.signUp), AuthController.signUp)

router.post('/sign_in', validator(authSchema.signIn), AuthController.signIn)

router.post('/user_contact', validator(authSchema.userContact), AuthController.saveContactData)

router.post('/secure_info', validator(authSchema.userSecureInfo), AuthController.saveSecuredData)

export default router
