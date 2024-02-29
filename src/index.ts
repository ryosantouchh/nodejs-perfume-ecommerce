import express from 'express'

const app = express()

const port = process.env.NODE_SERVER_PORT || '8080'

app.listen(port, () => {
  console.log('server running at port 8080')
})
