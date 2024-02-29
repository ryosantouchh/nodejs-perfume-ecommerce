import type { ErrorRequestHandler } from 'express'
import express from 'express'
import cors from 'cors'
import { connectDatabase } from '@database'

const app = express()

const port = process.env.NODE_SERVER_PORT || '8080'

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

const errorHandler: ErrorRequestHandler = (error, _, res, _next) => {
  const errorObj = { message: error.message, statusCode: 500 }

  if ((error as any).statusCode) {
    errorObj.statusCode = (error as any).statusCode
  }

  res.status(errorObj.statusCode).send(errorObj)
}

app.use('/', errorHandler)

connectDatabase()

app.listen(port, () => {
  console.log('server running at port 8080')
})
