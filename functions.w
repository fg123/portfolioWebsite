// Functions made of one expression has implicit return.
let doubleNumber => (x) x * 2

// Functions can return other functions. This has two implicit returns.
let addCreator => (adder) #:(addend) adder + addend

// WendyScript also has closures:
let add10 = addCreator(10)
let add20 = addCreator(20)

add10(40)
add20(20)