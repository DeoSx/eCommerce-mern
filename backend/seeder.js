const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const users = require('./data/user')
const products = require('./data/products')

const User = require('./models/UserModel')
const Product = require('./models/ProductModel')
const Order = require('./models/OrderModel')

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((p) => ({ ...p, user: adminUser }))

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!')
    process.exit()
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed')
    process.exit()
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
