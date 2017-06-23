// Functions that are one statement long don't require braces.
let sum => (lst) 
  if lst.size == 0 ret 0 
  // Sublist operator with Ranges
  else ret lst[0] + sum(lst[1->lst.size])

let entered = 0
let allNum = []
// Runtime type checking.
for entered.type == <number> {
  @"Please enter a number: "
  input entered
  if (entered.type == <number>) 
    // Easy List Appending
    allNum += entered
}
@"The sum of all numbers is: "
sum(allNum)