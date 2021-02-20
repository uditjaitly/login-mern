const express = require("express");
const cors = require("cors");
const e = require("express");
const app = express();
app.use(express.json());
app.use(cors());
const userInfo = [];

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const chosenUser = userInfo.find((user) => {
    return user.email == email;
  });
  console.log("User", chosenUser);
  console.log(userInfo);
  try {
    if (chosenUser === undefined) {
      return res.status(401).send("Email not found");
    } else if (chosenUser.password == password) {
      console.log("here");
      return res.status(200).send("Logged in!");
    } else {
      return res.status(401).send("Invalid password");
    }
  } catch (e) {
    return res.send(e);
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  userInfo.push({ name, email, password });
  res.send("Done!");
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
