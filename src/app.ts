import express from 'express'
import path from 'path'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'

const swaggerDocument = YAML.load(
  path.join(__dirname, '../_build/swagger.yaml')
)

const app = express()

//middleware
app.use(express.json())

// route
app.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
  })
)

export default app
