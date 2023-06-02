const express = require("express");
const { userController } = require("../controllers/userController");
const { body } = require("express-validator");
const { validate } = require("../middleware/validation");

const userRoutes = express.Router();

userRoutes.get("/", userController.getAll);
userRoutes.get("/:id", userController.getById);
userRoutes.post(
  "/",
  body("name").notEmpty().withMessage("Name field cannot be empty!"),
  body("surname").notEmpty().withMessage("Surname field cannot be empty!"),
  body("email").notEmpty().withMessage("Email field cannot be empty!"),
  body("password").notEmpty().withMessage("Password field cannot be empty!"),
  validate,
  userController.add
);
userRoutes.delete("/:id", userController.deleteById);
userRoutes.put(
  "/:id",
  body("name").notEmpty().withMessage("Name field cannot be empty!"),
  body("surname").notEmpty().withMessage("Surname field cannot be empty!"),
  body("email").notEmpty().withMessage("Email field cannot be empty!"),
  body("password").notEmpty().withMessage("Password field cannot be empty!"),
  validate,
  userController.update
);

module.exports = {
  userRoutes,
};
