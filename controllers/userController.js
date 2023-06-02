const { User } = require("../models/user");

const userController = {
  getAll: (req, res) => {
    User.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    let id = req.params.id;

    User.findById(id)
      .then((data) => {
        if (data) res.json(data);
        else res.status(404).json({ msg: "Not found!" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  add: (req, res) => {
    let user = new User({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    });

    user.save();

    res.json(user);
  },
  deleteById: (req, res) => {
    let id = req.params.id;

    User.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  update: (req, res) => {
    let id = req.params.id;

    User.findById(id)
      .then((data) => {
        data.name = req.body.name;
        data.surname = req.body.surname;
        data.email = req.body.email;
        data.password = req.body.password;

        data.save();

        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = {
  userController,
};
