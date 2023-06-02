const express = require("express");
const { userRoutes } = require("./routes/userRoutes");
const { db } = require("./config/db");
const { bookRoutes } = require("./routes/bookRoutes");
const app = express();

require("dotenv").config();

db.connect();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

app.listen(3300, () => {
  console.log("Express is running...");
});
