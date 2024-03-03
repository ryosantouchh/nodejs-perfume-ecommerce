import type { ErrorRequestHandler } from 'express'
import express from 'express'
import cors from 'cors'
import { connectDatabase } from '@database'
import apiRouter from './routes'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const port = process.env.NODE_SERVER_PORT || '8080'

app.use(cors())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

const errorHandler: ErrorRequestHandler = (error, _, res, _next) => {
  const errorObj = { message: error.message, statusCode: 500 }

  if ((error as any).statusCode) {
    errorObj.statusCode = (error as any).statusCode
  }

  res.status(errorObj.statusCode).send(errorObj)
}

app.use('/', apiRouter)
app.use('/', errorHandler)

connectDatabase()

app.listen(port, () => {
  console.log('server running at port 8080')
})
