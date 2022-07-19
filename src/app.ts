import express from 'express'
import path from 'path'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'
import passport from 'passport'
import session from 'express-session'

import productRouter from './routes/productRoute'
import { errorHandler } from './errorHandler/error'
import userRoute from './routes/userRoute'
import imageRoute from './routes/imageRoute'
import authRoute from './routes/authRoute'
import { googleStrategy } from './config/passport'

const swaggerDocument = YAML.load(
  path.join(__dirname, '../_build/swagger.yaml')
)

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.text())

//config passport
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
)
app.use(passport.initialize())
app.use(passport.session())
passport.use(googleStrategy)

// route
app.use('/products', productRouter)

//swagger api docs
app.use('/users', userRoute)
app.use('/images', imageRoute)
app.use('/auth', authRoute)
app.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
  })
)

//error handler
app.use(errorHandler)

export default app
