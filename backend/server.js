const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const { notFound, errorHandler } = require('./middleware/errorMiddleware')

const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

dotenv.config()
connectDB()
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
