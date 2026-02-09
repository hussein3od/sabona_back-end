// import pkg from 'pg'
// const { Pool } = pkg

// let pool

// if (!global.pgPool) {
//   pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false },
//   })
//   global.pgPool = pool
// } else {
//   pool = global.pgPool
// }

// export default pool

// db.js
import { Pool } from 'pg';
// require('dotenv').config();

// نتحقق إذا كنا نعمل على جهاز محلي (Development) أو على السيرفر (Production)
// const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // نستخدم SSL فقط إذا كنا في بيئة الـ Production (مثل Vercel)
  ssl: { rejectUnauthorized: false }
});
// الحل الجذري: إجبار كل اتصال جديد على استخدام UTF8
pool.on('connect', (client) => {
  client.query("SET client_encoding = 'UTF8';")
    .catch(err => console.error('Error setting encoding:', err));
});
export default pool;
export const query = (text, params) => pool.query(text, params)