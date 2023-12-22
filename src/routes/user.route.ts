import express from 'express'
import { userController } from '../controllers/user.controller'
import checkAuth from '../middlewares/checkAuth'
import { USER_ROLE } from '../constants/users.constants'

const router = express.Router()

router.post('/create-user', userController.createUser)
router.get('/', checkAuth(USER_ROLE.admin), userController.getAllUsers)
router.get(
  '/:id',
  checkAuth(USER_ROLE.admin, USER_ROLE.user),
  userController.getSingleUser,
)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router
