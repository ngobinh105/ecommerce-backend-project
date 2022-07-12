import { Router, Request, Response } from 'express'

const cartRoutes = Router()
cartRoutes.get('', (req: Request, res: Response) => {
  res.send('should return array of user object')
})
cartRoutes.post('', (req: Request, res: Response) => {
  res.send('add to cart')
})
cartRoutes.delete('', (req: Request, res: Response) => {
  res.send('empty cart')
})

export default cartRoutes
