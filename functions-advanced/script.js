// Functions advanced

// We know already we can use function declaration and function expression to create a function
// Function declaration
function calcSum (x, y) {
    return x + y
}

// Function expression
const calcSum = function (x, y) {
    return x + y
}

// A callback function is a function that is passed as an argument to another function
// You can pass a named function or an anonymous function as a callback
function display(result) {
    console.log(result)
}
  
function calculate(num1, num2, callback) {
    let sum = num1 + num2
    callback(sum)
}

calculate(5, 5, display)

// With an anonymous function:
calculate(5, 5, function(result) {
    console.log(result)
})


// Arrow functions
let calcSum = (x, y) => {
    return x + y
}

// If you only return one expression, you can remove the curly braces and the return
let calcSum = (x, y) => x + y

// If you only have one argument, you can remove the parentheses:
let squareNum = x => x * x

// If you have no argument, you need the parentheses:
let displayWarning = () => console.log("warning!")
