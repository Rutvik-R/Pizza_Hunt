const router = require("express").Router()
const { User, validate } = require("../models/userModel")
const bcrypt = require("bcrypt")

router.post("/", async (req, res) => {
	try {
		if (req.body.isGoogleSignIn === true) req.body.password = "#123pizzaHunt"
		const { error } = validate(req.body);
		if (error) {
			return res.status(400).send({message: error.details[0].message})
		}

		const user = await User.findOne({ email: req.body.email })

		if (user && user.isGoogleSignIn === false && req.body.isGoogleSignIn === true) {
			return res.status(500).send({message : "Internal Server Error"})
		}

		if (user && req.body.isGoogleSignIn === false) {
			return res.status(401).send({message: "User with given email already exists"})
		}

		if (user && req.body.isGoogleSignIn === true) {
			return res.status(200).send({message: "Successfully Logged in"})
		}

		const salt = await bcrypt.genSalt(Number(process.env.SALT))
		const hashPassword = await bcrypt.hash(req.body.password, salt)


		await new User({...req.body, password: hashPassword}).save();
		res.status(201).send({message: "Successfull Registration"})


	} catch (err) {
		console.log(err);
		res.status(500).send({message: "Internal Server Error"})
	}
})

module.exports = router;