const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db.js");
const userRouter = require("./routes/user.routes");
const Users = require("./models//users.model");
const app = express();
const apiPort = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.use("/api", userRouter);

// const pushStudent = (array) => {
// 	console.log(array);
// 	array.forEach((element) => {
// 		console.log(new Users(element));
// 		const newStudent = new Users({ name: "Seif" });

// 		newStudent
// 			.save()
// 			.then(() => {
// 				return res.status(200).json({
// 					success: true,
// 					id: newStudent._id,
// 					message: "User updated!",
// 				});
// 			})
// 			.catch((error) => {
// 				return res.status(404).json({
// 					error,
// 					message: "User not updated!",
// 				});
// 			});
// 	});
// };
// const studentArray = [
// 	"Abdelhafiz",
// 	"Abeer",
// 	"Amal",
// 	"Areen",
// 	"Dialah",
// 	"Eman",
// 	"Farah",
// 	"Fatima",
// 	"Fedaa",
// 	"Haneen",
// 	"Khawla",
// 	"Marwa",
// 	"Maysaa",
// 	"Nour Alhuda",
// 	"Rahaf",
// 	"Rahmeh",
// 	"Rawan",
// 	"Rana",
// 	"Razan",
// 	"Sahar",
// 	"Sara",
// 	"Sondos",
// 	"Taghreed",
// 	"Tahani",
// 	"Tojan",
// 	"Walaa",
// ];
// pushStudent(studentArray);
app.listen(apiPort, () =>
	console.log(
		`Server running on port ${apiPort} \n http://localhost:${apiPort}`
	)
);
