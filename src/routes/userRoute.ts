import { Router } from 'express'

import { verifyUserLogin } from '../middlewares/userMiddlewares'
import userController from '../controllers/userController'
import fileUpload from '../middlewares/multerService'

const userRoute = Router()
userRoute.get('', userController.getAllUsers)
userRoute.get('/:userId', userController.getSingleUser)
userRoute.put('/:userId', userController.updateUser)
userRoute.post('', fileUpload, userController.createUser)
userRoute.delete('/:userId', userController.deleteUser)

export default userRoute
