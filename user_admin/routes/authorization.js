const { User } = require("../models/userModel")
const router = require("express").Router()
const Joi = require('joi')
const jwt = require("jsonwebtoken")
const passwordComplexity = require("joi-password-complexity")
const bcrypt = require('bcrypt')

const validate = (data) => {
	const Schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		isGoogleSignIn: Joi.boolean().required().label("Is Google Sign In"),
		password: passwordComplexity().label("Password")
	})

	return Schema.validate(data);
}

router.post("/", async(req, res) => {
	try {
		if (req.body.isGoogleSignIn === true) {
			return;
		}

		const { error } = validate(req.body)

		if (error) {
			return res.status(400).send({message: error.details[0].message})
		}

		const user = await User.findOne({email: req.body.email})
		if (!user) {
			return res.status(401).send({message: "Invalid email or password"})
		}

		if (user.isGoogleSignIn === true, req.body.isGoogleSignIn === false) {
			return res.status(500).send({message: "Internal Server Error"})
		}

		const validPassword = await bcrypt.compare(req.body.password, user.password)

		if (!validPassword){
			return res.status(401).send({message: "Invalid email or password"})
		}

		const token = user.generateAuthToken()
		
		res.status(200).send({data: token, message: "Logged in successfully", userData: {"name": user.name, "email": user.email} });


	} catch (err) {
		console.log(err);
		res.status(500).send({message: "Internal Server Error"})
	}
})

module.exports = router