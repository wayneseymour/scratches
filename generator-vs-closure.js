function* addingGenerator(a) {
  const b = yield a
  yield a + b
}
function addingClosure(a) {
  return (b) => {
    return a + b
  }
}
const add2Iterator = addingGenerator(2)// Set initial state to 2
console.log(add2Iterator.next()) // Observe initial state
console.log(add2Iterator.next(1)) // Add initial state + 1 = { value: 3, done: false }
console.log(add2Iterator.next(1))
