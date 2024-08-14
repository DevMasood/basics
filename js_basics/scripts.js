
//ES6 => EcmaScript
//helper methods
//  document.write(data)
//  alert(data)
// console.log(data)

//variables
// var
// let
// CONST

 var person = 'John'
 var value = 56
 var value2 = 10


 var price = "56"
 var price2 = 14
//  console.log(typeof person)
// console.log(value, value2, price , price2)
// console.log(typeof value,typeof value2,typeof  price ,typeof  price2)
// console.log(value + value2)
// console.log(price + price2)

// var mentioning
// var firstName = "John"
// var lastName = 'Doe'
// var jobRole = 'carpenter'
// var age =  40

// firstName = "Joeseph"

// console.log(firstName)
// console.log(firstName)
// let firstName = "John"
let lastName = 'Doe'
let jobRole = 'carpenter'
let age =  40

// console.log(firstName + " " + lastName)
// console.log(firstName - " " - lastName)
// console.log(firstName * " " * lastName)

 
// alert("Masood")
// let body = document.querySelector('body')
// let para = document.createElement('p')
// let img = document.createElement('img')
// para.style.backgroundColor= "#fff";
// para.style.color = "#000"
// // para.className = "paragraph"
// para.innerHTML ="Masood"
// body.appendChild(para)
// body.appendChild(img)

// // firstName = "Joseph"
// // console.log(firstName)
// const pi = 3.14
// // console.log(pi)

// // +=, -= , /= , *= , ++, --


// let number = 10

// number += 5
// // console.log(number)
// number += 5
// // console.log(number)
// number += 5
// // console.log(number)


// number = (10+5)*5
// console.log(number)




// const slices = 10
// const chidren = 3 

// const amount = slices/chidren

// console.log(amount)

// // primitive datatypes

// //string
// var firstName = 'John'
// var lastEName = "Doe"
// console.log(firstName)
// console.log(lastEName)
// console.log(typeof firstName)
// //number
// let total = 100
// console.log(total)
// console.log("total",typeof total)
// //boolean
// let lightSwitch = true
// console.log(lightSwitch)
// console.log( typeof lightSwitch)
// //null
// var waste = null
// console.log(waste)
// console.log(typeof waste)

// //undefined
// var tomorrowClass 
// console.log( tomorrowClass)
// console.log(typeof tomorrowClass)
// //symbol

// // non primitive types

// //Object
// let per = {
//     name:'Masood',
//     designation: 'Developer',
// }
// console.log(typeof per)
// //Arrays
// const cars = ["Saab", "Volvo", "BMW", 'Ferrari', 'tesla-5'];
// console.log(cars[0])
// console.log('my array length', cars.length

// )
// console.log(typeof cars)
// console.log(cars.reverse())
// //Functions
// let add = function(){

// }
// console.log(typeof add)


// const customArray = []
// customArray.length = 200


// console.log(customArray.length)




function greet(personName){
    // console.log('Welcome' + " "  + personName + ' to Our Organization.')
    console.log(`Welocme to ${personName} to to Our Organization.`)
}

greet('Neha')
greet('Deepthi')
greet('Sahithya')


// calculate 
// 1 inch 2.54cm

function calculate(value) {
        console.log(value * 2.54)
        return value * 2.54
    }

let width = calculate(100)
let height = calculate(77)

console.log(width, height)



let addTwoValues =  add(5,10)
// console.log(addTwoValues)
function add(a,b) {
 return a + b
}
console.log(addTwoValues)
