const mongoose = require("mongoose")

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}

	try {
		mongoose.connect(process.env.DB, connectionParams);
		console.log("Connected Successfully to the database");
	} catch (err) {
		console.log("Couldn't connect to the database")
		console.log(err);
	}
}