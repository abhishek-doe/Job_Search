const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8080
const app = express()
const connectDB = require("./config/dbConnection")
const cors = require("cors")

connectDB()
app.use(cors())
app.use(express.json())
app.use('/signup', require("./routes/signupRoutes"))
app.use('/login', require("./routes/loginRoutes"))

app.listen(PORT, (req, res) => {
    console.log(`Server Running on PORT ${PORT} `)
})