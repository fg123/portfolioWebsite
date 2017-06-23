// Define object/class with instance and static members
struct shape => (x, y) [print]
shape.print => () {
  "Shape at (" + this.x + ", " + this.y + ")"
}

// Implicit overridable constructor based on instance members
let myGenericShape = shape(10, 20)
myGenericShape.print()

// Inheriting with added instance and overridden static member
struct circle:shape => (radius) [print]
circle.print => () {
    "Circle at (" + this.x + ", " + this.y + ") with radius " + this.radius
}

// Overriding init function (required for children classes)
circle.init => (x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    ret this
}

let myCircle = circle(30, 40, 10)
myCircle.print()