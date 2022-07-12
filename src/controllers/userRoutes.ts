import { Router, Request, Response } from 'express'

const userRoutes = Router()
userRoutes.get('', (req: Request, res: Response) => {
  res.send('should return array of user object')
})
userRoutes.post('', (req: Request, res: Response) => {
  res.send(req.body)
})
userRoutes.get('/:id', (req: Request, res: Response) => {
  res.send('get user by id')
})
userRoutes.put('/:id', (req: Request, res: Response) => {
  res.send('update user info')
})
userRoutes.delete('/:id', (req: Request, res: Response) => {
  res.send('delete user')
})

export default userRoutes
