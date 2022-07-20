import { Router } from 'express'
import passport from 'passport'

import userController from '../controllers/userController'
import { verifyUserLogin } from '../middlewares/userMiddlewares'

const authRoute = Router()
authRoute.post('/login', verifyUserLogin, userController.userLogin)
authRoute.post('/profile', userController.verifyUserToken)
authRoute.get(
  '/googlelogin',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
  userController.userLogin
)
authRoute.get(
  '/googlelogin/callback',
  passport.authenticate('google', { failureRedirect: '/googlelogin' }),
  function (req, res) {
    res.redirect('/')
  }
)
authRoute.get('/logout', userController.userLogout)

export default authRoute
