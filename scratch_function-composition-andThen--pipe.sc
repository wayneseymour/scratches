val add = (a: Int) => a + 1

val mul = (a: Int) => a * 2

val sub = (a: Int) => a - 1

println((add andThen mul)(2))

// adding more methods
println((add andThen  mul andThen sub)(2))
