const express = require("express");
const { bookController } = require("../controllers/bookController");
const { body } = require("express-validator");
const { validate } = require("../middleware/validation");

const bookRoutes = express.Router();

bookRoutes.get("/", bookController.getAll);
bookRoutes.get("/:id", bookController.getById);
bookRoutes.post(
  "/",
  body("name").notEmpty().withMessage("Name field cannot be empty!"),
  body("publishDate")
    .notEmpty()
    .withMessage("Publish Date field cannot be empty!"),
  body("year").notEmpty().withMessage("Year field cannot be empty!"),
  body("description")
    .notEmpty()
    .withMessage("Description field cannot be empty!"),
  validate,
  bookController.add
);
bookRoutes.delete("/:id", bookController.deleteById);
bookRoutes.put(
  "/:id",
  body("name").notEmpty().withMessage("Name field cannot be empty!"),
  body("publishDate")
    .notEmpty()
    .withMessage("Publish Date field cannot be empty!"),
  body("year").notEmpty().withMessage("Year field cannot be empty!"),
  body("description")
    .notEmpty()
    .withMessage("Description field cannot be empty!"),
  validate,
  bookController.update
);

module.exports = {
  bookRoutes,
};
