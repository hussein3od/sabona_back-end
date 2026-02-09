import express from 'express'
import cors from 'cors'

// استيراد كل Routes
import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import orderRoutes from './routes/order.routes.js'
import messageRoutes from './routes/message.routes.js'
import adminRoutes from './routes/admin.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

// routes
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/admin', adminRoutes)

export default app  // مهم: export app بدل app.listen()
