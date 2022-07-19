import { Router } from 'express'
import passport from 'passport'

import userController from '../controllers/userController'
import { verifyUserLogin } from '../middlewares/userMiddlewares'

const authRoute = Router()
authRoute.post('/login', verifyUserLogin, userController.userLogin)
authRoute.post('/profile', userController.verifyUserToken)
authRoute.post(
  '/googleLogin',
  passport.authenticate('google', { scope: ['profile'] }),
  userController.userLogin
)

export default authRoute
