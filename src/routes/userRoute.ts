import { Router } from 'express'

import userController from '../controllers/userController'
import fileUpload from '../middlewares/multerService'

const userRoute = Router()
userRoute.post('', fileUpload, userController.createUser)

export default userRoute
