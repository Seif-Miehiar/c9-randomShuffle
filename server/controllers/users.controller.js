const Users = require("../models/users.model");

createUser = (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a user",
		});
	}

	const user = new Users(body);

	if (!user) {
		return res.status(400).json({ success: false, error: err });
	}

	if (Users.findOne({ name: user.name })) {
		res.status(400).json({ success: false, error: "user already exists!" });
	} else {
		user
			.save()
			.then(() => {
				return res.status(201).json({
					success: true,
					id: user._id,
					message: "User created!",
				});
			})
			.catch((error) => {
				return res.status(400).json({
					error,
					message: "User not created!",
				});
			});
	}
};

updateUser = async (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a body to update",
		});
	}

	Users.findOne({ _id: req.params.id }, (err, user) => {
		if (err) {
			return res.status(404).json({
				err,
				message: "User not found!",
			});
		}
		user.name = body.name;
		user
			.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: user._id,
					message: "User updated!",
				});
			})
			.catch((error) => {
				return res.status(404).json({
					error,
					message: "User not updated!",
				});
			});
	});
};

deleteUser = async (req, res) => {
	await Users.findOneAndDelete({ _id: req.params.id }, (err, user) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!user) {
			return res.status(404).json({ success: false, error: `User not found` });
		}

		return res.status(200).json({ success: true, data: user });
	}).catch((err) => console.log(err));
};

getUserById = async (req, res) => {
	await Users.findOne({ _id: req.params.id }, (err, user) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!user) {
			return res.status(404).json({ success: false, error: `User not found` });
		}
		return res.status(200).json({ success: true, data: user });
	}).catch((err) => console.log(err));
};

getUsers = async (req, res) => {
	await Users.find({}, (err, users) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!users.length) {
			return res.status(404).json({ success: false, error: `Users not found` });
		}
		return res.status(200).json({ success: true, data: users });
	}).catch((err) => console.log(err));
};

module.exports = {
	createUser,
	updateUser,
	deleteUser,
	getUserById,
	getUsers,
};
