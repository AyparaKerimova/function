//Part-1 

let greet = (name= "hello") => console.log(name)
greet()
greet("hi")

//Part-2

let factorial = (n) => {
    if (n===0) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}

console.log(factorial(5))

// Part-3

let sumAll = (...rest) => {
    let sum = 0
    for (i=0; i<rest.length; i++) {
    sum += rest[i]
    }
    return sum

}

console.log(sumAll(2,3,4))

//Part-4

let first = () => {
    console.log("first")
}

let second = () => {
    first()
    console.log("second")
}
let third = () => {
    first()
    second()
    console.log("third")
}

first()
second()
third()

