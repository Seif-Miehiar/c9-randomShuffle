const express = require("express");

const User_Controller = require("../controllers/users.controller");

const router = express.Router();

router.post("/user", User_Controller.createUser);
router.put("/user/:id", User_Controller.updateUser);
router.delete("/user/:id", User_Controller.deleteUser);
router.get("/user/:id", User_Controller.getUserById);
router.get("/users", User_Controller.getUsers);

module.exports = router;
