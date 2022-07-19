import { Router } from 'express'

import userController from '../controllers/userController'
import { verifyUserLogin } from '../middlewares/userMiddlewares'

const authRoute = Router()
authRoute.post('/login', verifyUserLogin, userController.userLogin)
authRoute.post('/profile', userController.verifyUserToken)

export default authRoute
