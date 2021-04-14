const aNumberWithSomeOperators = number => {
  let currentValue = number

  const show = () => console.log(currentValue)
  const add = (valueToAdd) => currentValue += valueToAdd

  return { currentValue, show, add }
}


const stuffWithNumberFive = aNumberWithSomeOperators(5)


const someObject = { name: "bob" }

const closureWithObj = obj => {
  const changeName = (name) => obj.name = name
  return changeName
}

const changeSomeObjectsName = closureWithObj(someObject)

changeSomeObjectsName("potato")

console.log(someObject)