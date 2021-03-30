// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored

// Making a plan, assess what you have

// Expected input & output
// $ node sum.js 1 2 3 4 5 -1 potato
// should return 14

// What do we have
// Values from the command line (we get an array with process.argv)

// What do we want
// Sum of all valid values
// (pos / neg) good, (everything else) bad


// How can we achieve that
// query process.argv, and clean it by using the slice method (cleaning is optionnal)
// Declare an accumulator
// iterate over the elements of the process.argv array
// for every element in the array
// convert, then check if string or number
// if is a number
// update the value of the accumulator with the new number
// return the accumulator




// Create a function called sum
// Get the arguments from the command line
// Call the function
// Consider the constraints
// Create some pseudo code
// process.argv store that somewhere


// ACTUAL CODING TIME !


// query process.argv, and clean it by using the slice method (cleaning is optionnal)
const commandLineArguments = process.argv.slice(2)
console.log(commandLineArguments)

const sumOfAListOfElements = function (listOfElements) {
  // Declare an accumulator
  let accumulator = 0
  // iterate over the elements of the process.argv array
  for (let i = 0; i < listOfElements.length; i++) {
    // for every element in the array
    const currentElement = listOfElements[i]
    // convert, 
    const parsedElement = Number(currentElement)
    // then check if string or number
    if (!Number.isNaN(parsedElement)) {
      // if is a number
      // update the value of the accumulator with the new number
      accumulator += parsedElement
    }
  }
  // return the accumulator
  return accumulator
}

const sumOfAListOfElements2 = function (listOfElements) {
  let accumulator = 0
  for (let i = 0; i < listOfElements.length; i++) {
    const currentElement = listOfElements[i]
    const parsedElement = Number(currentElement)
    if (!Number.isNaN(parsedElement)) {
      accumulator += parsedElement
    }
  }
  return accumulator
}

const output = sumOfAListOfElements(commandLineArguments)
console.log(output)