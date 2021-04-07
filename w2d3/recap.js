// WTH ?
// - callback hell is hell
// Async return (cat api)
// Copy paste wat
// syntax for callbacks recognize async
const generateRandomId = () => Math.floor(Math.random() * 2000)


// Cat API
// request()
// returns: error, description
// source: catapi

// list is array
// callback is function
const listAndDoSomething = (list, callback) => {
  for (const element of list) {
    callback(element)
  }
}

// value is any type
const consoleThatThing = (value) => {
  return console.log(`value is ${value}`)
}
const consoleThatThingTwo = (value) => console.log(`value is ${value}`)

const someList = [1, 2, 3, 4, 5, 6, "🎂"]

listAndDoSomething(someList, consoleThatThing)
listAndDoSomething(someList, (value) => console.log(`value is ${value}`))


// 34 = 30 + 4
// 66 + 30 + 4 = 100