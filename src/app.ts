import express from 'express'
import path from 'path'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'
import productRouter from './routes/productRoute'
const swaggerDocument = YAML.load(
  path.join(__dirname, '../_build/swagger.yaml')
)

const app = express()

//middleware
app.use(express.json())
app.use(express.text())

// route
app.use('/products', productRouter)
//swagger api docs
app.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
  })
)

export default app
