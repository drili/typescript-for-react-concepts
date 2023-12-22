// *** Functions
let sayHi = () => {
    console.log("Hi, welcome.");
}

let funcReturnString = ():string => {
    console.log("hi");
    return "Testing String"
}

let multiple = (number: number) => {
    return number * 2
}

multiple("5") // FALSE: Argument of type 'string' is not assignable to parameter of type 'number'.
multiple(10)

let sum = (num1: number, num2: number, another?:number) => {
    return num1 + num2
}

sum(2, 3)