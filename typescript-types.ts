// *** STANDARD TYPES
let variable = "hello"
variable = "hi"

let age = 18
age = "hi" // FALSE: Type 'string' is not assignable to type 'number'.

let ageWithType: number
let ageWithTypeInitia: number = 22

ageWithType = "Test" // FALSE: Type 'string' is not assignable to type 'number'.
ageWithType = 45

let testString: string
testString = "hello"

let testBoolean: Boolean
testBoolean = false

let testStringOrNumber: string | number
testStringOrNumber = 10
testStringOrNumber = "10"
testStringOrNumber = [] // FALSE: Type 'never[]' is not assignable to type 'string | number'

// *** ARRAY TYPES
let names = ["John", "Jane"]
names.push(3)
names.push("Mark")

let numbers = [22, 23, 24]
numbers.push(true)
numbers.push(25)

let testStringArray: string[]
testStringArray = [1, 2, 3] // FALSE: Type 'number' is not assignable to type 'string'.
testStringArray = ["1", "2", "3"]

let testNumberArray: number[]
testNumberArray = [1, 2, 3]

let testStringOrNumberArray: (string | number)[]
testStringOrNumberArray = [1, "test", "test"]

// *** OBJECT TYPES
let user = {
    username: "John",
    age: 22,
    isAdmin: false
}

user.username = "Jane"
user.username = 22 // FALSE: Type 'number' is not assignable to type 'string'

user.isAdmin = true

user.phone = "+23 23 23 23" // FALSE: Property 'phone' does not exist on type '{ username: string; age: number; isAdmin: boolean; }'.

let userObject: {
    username: string,
    age: number,
    isAdmin: boolean
}

userObject = {
    username: "John",
    age: 23,
    isAdmin: true,
}

let userObjectConditional: {
    username: string,
    age: number,
    isAdmin: boolean
    phone?: string
}

userObjectConditional = {
    username: "John",
    age: 23,
    isAdmin: true,
    phone: "23 23 23 23"
}

// ANY
let testAny: any

testAny = 22
testAny = "23"

let anyArray: any[]
anyArray = ["test", 23, true]