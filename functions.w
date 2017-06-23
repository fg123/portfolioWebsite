// Functions made of one expression has implicit return.
let doubleNumber => (x) x * 2
"30 doubled is: " + doubleNumber(30)

// Functions can return other functions. This has two implicit returns.
let addCreator => (adder) #:(addend) adder + addend

// WendyScript also has closures:
let add10 = addCreator(10)
let add20 = addCreator(20)

"40 + 10 is " + add10(40)
"20 + 20 is " + add20(20)