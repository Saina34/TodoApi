const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const todosRoutes = require("./routes/todoRoutes");
const bodyParser = require("body-parser");

app.use("/", todosRoutes);

app.use(cors());

// port
const port = process.env.PORT || 4000;

// MIDDLEWARE
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.json({ status: "okay" });
});

// connect to database
MONGODB_URI =
  "mongodb+srv://todo:todo123@cluster0.e2xzl7x.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database is connected");
  }
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
