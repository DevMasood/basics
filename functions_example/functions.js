// alert('boom')

// decalre function

function add (num1, num2) {
    let c = num1 + num2
    console.log(c)
    return c
}

//execute function
add (10,20)

const arr = [1,2,3]

function arrExample(arrayDataType){
    console.log(arrayDataType)
}

arrExample(arr)

const person = {
    name:'Rahul',
    role:'Student'
}

function objExample(obJDataType){
    console.log(obJDataType)
}

objExample(person)



function highOrderFn(cb) {
    cb()
}

function showPerson() {
    console.log('hello im a callback function')
}

highOrderFn(showPerson)

const fruits = ["apple", "orange", "cherry"];

fruits.forEach(showFruits)

function showFruits(fruit){
    console.log(fruit)
}