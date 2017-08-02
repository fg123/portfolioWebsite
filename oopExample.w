// Define object/class with instance and static members
struct shape => (x, y) [print]
shape.print => () {
  "Shape at (" + this.x + ", " + this.y + ")"
}

// Implicit constructor based on instance members
let myGenericShape = shape(10, 20)
myGenericShape.print()

// Override constructor to ensure both fields are the same
shape.init => (x) {
    this.x = x
    this.y = x
    ret this
}

let otherShape = shape(50)
otherShape.print()