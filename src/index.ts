import express from 'express'
import { connectDatabase } from '@database'

const app = express()

const port = process.env.NODE_SERVER_PORT || '8080'

connectDatabase()
app.listen(port, () => {
  console.log('server running at port 8080')
})
