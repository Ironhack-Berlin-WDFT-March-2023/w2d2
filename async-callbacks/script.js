// Async and callbacks
// Async functions allow us to continue executing our code while the async function is being executed in the background

// Let's write an async function:
// The callback function contains the code that will be executed when the async function finished its execution
function someCallbackFunction() {
    console.log("Hey there, Ironhackers! 👋")
}

// setTimeout() sets a timer that executes a callback function once the timer expires
// We set a timeout and after 2 seconds, the callback function gets executed
let timeoutId = setTimeout(someCallbackFunction, 2000)

// Another way of writing this (anonymous function):
timeoutId = setTimeout(function () {
	console.log("Hey there, Ironhackers! 👋")
}, 2000)

console.log("This runs first")

// You can cancel the timeout
clearTimeout(timeoutId)


// PRACTICE: Let's create a counter that will print a number in a sequence each second
let counter = 1
let callbackFunction = function () {
    console.log(counter)
    setTimeout(callbackFunction, 1000)
 
    counter += 1
}

timeoutId = setTimeout(callbackFunction, 1000)

// If we use the timeoutId we can also stop the counter
// Run the counter only 3 times:
counter = 1
timeoutId
callbackFunction = function () {
    console.log(counter)
     timeoutId = setTimeout(callbackFunction, 1000)
 
    counter += 1

    if (counter > 3) {
        clearTimeout(timeoutId)
    }
}

setTimeout(callbackFunction, 1000)


// There's a better async method to do build a counter: setInterval()
// setInterval() calls a function repeatedly with a fixed delayed time between each call
let i = 1
const intervalId = setInterval(function () {
	console.log(i)
	
    i++

    if (i > 10) {
        clearInterval(intervalId)
    }
}, 1000)
