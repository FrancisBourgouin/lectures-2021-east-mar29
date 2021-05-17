// Immutability

const someArray = [1, 2, 3, 4, 5]
// [1,2,3,4]
someArray.pop() // => Return 5
someArray.pop() // => Return 4
someArray.pop() // => Return 3

const immutablePop = array => {
  const copyOfArray = [...array]
  return copyOfArray.pop()
}

console.log(immutablePop(someArray))
console.log(immutablePop(someArray))
console.log(immutablePop(someArray))
console.log(immutablePop(someArray))

const someOtherArray = [[1], [2], [3]]

const someSubsetOfOtherArray = [...someOtherArray]
someSubsetOfOtherArray[2].pop()
console.log(someSubsetOfOtherArray)

console.log(immutablePop(someOtherArray))
console.log(immutablePop(someOtherArray))