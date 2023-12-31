require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middlewares/error-middleware')
const app = express()
const PORT = process.env.PORT || 3000

const router = require('./routes/main-router')

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
)

app.use('/api', router)
app.use(errorMiddleware)
const start = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
