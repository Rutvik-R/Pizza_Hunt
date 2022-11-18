const mongoose = require("mongoose")
const Joi = require("joi")
const passwordComplexity = require("joi-password-complexity")
const jwt = require("jsonwebtoken")

const userModel = new mongoose.Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	isGoogleSignIn: {type: Boolean, required: true},
	password: {type: String, required: true},
})

userModel.methods.generateAuthToken = () => {
	const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: '7d'})
	return token
}

const User = mongoose.model("UserInfo", userModel, "userInfo")

const validate = (data) => {
	const Schema = Joi.object({
		name: Joi.string().required().label("Name"),
		email: Joi.string().email().required().label("Email"),
		isGoogleSignIn: Joi.boolean().required().label("Is Google Sign In"),
		password: passwordComplexity().label("Password")
	})

	return Schema.validate(data);
}


module.exports = { User, validate }