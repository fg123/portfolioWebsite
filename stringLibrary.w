import string

// Operator Overloading allows a flexible string library:
// https://github.com/fg123/wendy/blob/master/src/wendy-lib/string.w
// String split with Division operator
"Hello world! This will be split by a space!" / " ";

// String join with Remainder operator
["Hello", "world!", "This", "is", "joined"] % " ";

// Combining them gives Python's string positional formatting

"Hello $1! The sum is $2!" % ["world", 10 * 20];