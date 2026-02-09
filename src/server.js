import app from './app.js'

const PORT = process.env.PORT || 5000
console.log(process.env.PORT);


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
