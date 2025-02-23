import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()
import connectDB from './config/db.js'

const port = process.env.PORT || 5000
connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('server is ready'))
app.use(notFound)
app.use(errorHandler)
app.listen(port, () => console.log(`server started on port ${port}`))
