import express from 'express'
import path from 'path'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'
import { errorHandler } from './errorHandler/error'

const swaggerDocument = YAML.load(
  path.join(__dirname, '../_build/swagger.yaml')
)

const app = express()

//middleware
app.use(express.json())
app.use(express.text())

// route

//swagger api docs
app.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
  })
)

app.use(errorHandler)

export default app
