const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000;
// const { fetchUserObject, validateLogin, createNewUser } = require("./helpers/userHelpers")
const generateUserHelpers = require("./helpers/coolerUserHelpers")
app.use(cookieParser())
app.use(express.static("public")); // Static files (css / images)
app.use(bodyParser.urlencoded({ extended: false }));// Parses the body of a form request string in an object

app.set("view engine", "ejs"); //

const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password: "vodka"
}
const user2 = {
  name: "Pequeño Pollo de la Pampa",
  email: "pock@pock.com",
  password: "44419"
}

const userArray = [user1, user2]

const userObj = { "periodic@table.com": user1, "pock@pock.com": user2 }
const anotherUserList = { "periodic@table.com": user1 }

const { fetchUserObject, validateLogin, createNewUser } = generateUserHelpers(userObj)

app.get("/", (req, res) => {
  // Declaring my inputs
  const email = req.cookies.email
  const currentUser = fetchUserObject(email)
  // Operate on the inputs
  const templateVars = {
    currentUser
  }
  // Return some values
  res.render("index", templateVars);
});


app.post("/login", (req, res) => {
  // Declaring my inputs
  const email = req.body.email
  const password = req.body.password

  // Operate on the inputs
  const result = validateLogin(email, password)
  // Return some values
  if (result.error) {
    return res.send(result.error)
  }
  res.cookie('email', result.data.email)
  res.redirect("/")
  // res.json(result.data)
})

app.get("/register", (req, res) => {
  const templateVars = {
    currentUser: null
  }
  res.render("register", templateVars)
})


app.post("/register", (req, res) => {
  // Declaring our inputs
  // const name = req.body.name
  // const email = req.body.email
  // const password = req.body.password
  const { name, email, password } = req.body

  // Operate on the inputs
  const result = createNewUser(name, email, password)

  if (result.error) {
    return res.send(result.error)
  }

  res.cookie("email", email)
  res.redirect("/")
})

app.post("/logout", (req, res) => {
  res.clearCookie("email")
  res.redirect("/")
})



app.listen(port, () => console.log(`Express server running on port ${port}`));
