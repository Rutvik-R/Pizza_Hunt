require("dotenv").config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const db = require("./db")()
app.use(express.json())


const registration = require("./routes/registration")
app.use("/api/registration", registration)

const login = require("./routes/authorization")
app.use("/api/login", login)


app.listen(process.env.PORT || 7000, () => {
	console.log(`Server started successfully`)
}) 