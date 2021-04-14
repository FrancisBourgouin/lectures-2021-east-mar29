const fetchUserObject = (email, userObj) => userObj[email]


const validateLogin = (email, password, userObj) => {
  if (!userObj[email]) {
    return { error: "no user", data: null }
  }
  if (userObj[email].password === password) {
    return { error: null, data: userObj[email] }

  } else {
    return { error: "bad password", data: null }
  }
}

const createNewUser = (name, email, password, userObj) => {
  if (userObj[email]) {
    return { error: "User already exists", data: null }
  }

  if (!name || !email || !password) {
    return { error: "There is an empty field", data: null }
  }

  userObj[email] = { name, email, password }

  return { error: null, data: { name, email, password } }

}

module.exports = { fetchUserObject, validateLogin, createNewUser }