const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/usersdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", userSchema);

// API Route to fetch users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// API Route to add a user
app.post("/users", async (req, res) => {
  const newUser = new User({ name: req.body.name });
  await newUser.save();
  res.json(newUser);
});

app.get("/", (req, res) => {
    res.send("Backend is running...");
  });
  

app.listen(5000, () => console.log("Backend running on port 5000"));
