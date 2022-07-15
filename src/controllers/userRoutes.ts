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
userRoutes.get('/:userId/carts', (req: Request, res: Response) => {
  res.send('get cart items of user')
})
userRoutes.post('/:userId/carts', (req: Request, res: Response) => {
  res.send('add to cart item')
})
userRoutes.put('/:userId/carts/:cartItemId', (req: Request, res: Response) => {
  res.send('edit cart item info')
})
userRoutes.delete(
  '/:userId/carts/:cartItemId',
  (req: Request, res: Response) => {
    res.send('delete cart item')
  }
)
export default userRoutes
