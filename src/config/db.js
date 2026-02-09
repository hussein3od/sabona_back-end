import pkg from 'pg'
const { Pool } = pkg

console.log('JWT_SECRET =', process.env.JWT_SECRET)

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})

export default pool
