import express from 'express'
import cors from 'cors'
import path from 'path'

// استيراد كل Routes
import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import orderRoutes from './routes/order.routes.js'
import messageRoutes from './routes/message.routes.js'
import adminRoutes from './routes/admin.routes.js'

// استيراد db و Pool يجب أن يكون مهيأ Serverless
import './config/db.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')))

// routes
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/admin', adminRoutes)

// بدل app.listen() نستخدم export default function للسيرفرلس
import { createServer } from '@vercel/node'
export default createServer(app)
