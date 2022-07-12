import express from 'express'
import path from 'path'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'

import userRoutes from './controllers/userRoutes'
import cartRoutes from './controllers/cartRoutes'

const swaggerDocument = YAML.load(
  path.join(__dirname, '../_build/swagger.yaml')
)

const app = express()

//middleware
app.use(express.json())
app.use(express.text())

// route
app.use('/users', userRoutes)
app.use('/cart', cartRoutes)

//swagger api docs
app.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
  })
)

export default app
