// Primitive values are passed by value
// They are stored and copied by value, which means two values are equal if they have the same value

let price1 = 20.99
let price2 = price1
console.log(price2)

price1 = 19.99

console.log(price1)
console.log(price2)

// Objects are passed by reference
let record1 = {
    artist: "Moby"
}

let record2 = record1

console.log(record1)
console.log(record2)

// Change the value of record1
record1.artist = "Radiohead"

// Both are changed
// Conclusion: There's only one object, but two variables pointing to it
console.log(record1)
console.log(record2)

// That's why you cannot compare two arrays or objects with ===
const albums1 = ["Everything Is Wrong", "Play"]
const albums2 = ["Everything Is Wrong", "Play"]
console.log(albums1 === albums2) // => false


// How can we copy an array or object then?

// Shallow copy
// We can use .slice() or the spread-operator to create a shallow copy of an array
// We can use the spread-operator to create a shallow copy of an object
// But that means: All nested properties are still copied by reference
const artists1 = ["Moby", "Radiohead", "Roisin Murphy"]
const artists2 = artists1.slice()
const artists3 = [...artists1]
artists1.push("Kraftwerk")
console.log(artists1)
console.log(artists2)
console.log(artists3)

// Deep copy
// To create a deep copy of an object or array, use JSON.stringify() and JSON.parse()
// JSON.stringify() converts a JavaScript object or array to a JSON string
// The JSON.parse() method parses a string and creates a JavaScript object or array out of it
const artist1 = {
    name: "Moby",
    labels: [
        {
            label: "Mute"
        },
        {
            label: "Little Idiot"
        }
    ]
}

const artist1Str = JSON.stringify(artist1)
console.log(artist1Str)
const artist2 = JSON.parse(artist1Str)
console.log(artist2)

// If we change now the nested properties of book1, book2 doesn't change
artist1.labels[0] = {
    label: "Instinct"
}

console.log(artist1)
console.log(artist2)


// We can also use JSON.stringify to compare objects or arrays
record1 = {
    artist: 'Moby'
}

record2 = {
    artist: 'Moby'
}

console.log(record1 === record2) // => false
console.log(JSON.stringify(record1) === JSON.stringify(record2)) // => true


// As we said, we don't want to mutate the original array
// Now we have some methods we can use to copy the original array and then work with the copy! :D

// There is a better way to create deep copies since JS 2022:
// structuredClone()
// Check browser compatibility: https://caniuse.com/
const record3 = structuredClone(record1)
record1.artist = "Kendrick Lamar"

console.log(record1)
console.log(record3)


