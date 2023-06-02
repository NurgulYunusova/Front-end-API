const { Book } = require("../models/book");

const bookController = {
  getAll: (req, res) => {
    Book.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    let id = req.params.id;

    Book.findById(id)
      .then((data) => {
        if (data) res.json(data);
        else res.status(404).json({ msg: "Not found!" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  add: (req, res) => {
    let book = new Book({
      name: req.body.name,
      publishDate: req.body.publishDate,
      year: req.body.year,
      description: req.body.description,
    });

    book.save();

    res.json(book);
  },
  deleteById: (req, res) => {
    let id = req.params.id;

    Book.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  update: (req, res) => {
    let id = req.params.id;

    Book.findById(id)
      .then((data) => {
        data.name = req.body.name;
        data.publishDate = req.body.publishDate;
        data.year = req.body.year;
        data.description = req.body.description;

        data.save();

        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = {
  bookController,
};
