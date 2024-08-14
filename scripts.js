
//ES6 => EcmaScript
//helper methods
//  document.write(data)
//  alert(data)
// console.log(data)

//variables
// var
// let
// CONST

//  var person = 'John'
//  var value = 56
//  var value2 = 10


//  var price = "56"
//  var price2 = 14
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
// let lastName = 'Doe'
// let jobRole = 'carpenter'
// let age =  40

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
    // console.log(`Welocme to ${personName} to to Our Organization.`)
}

greet('Neha')
greet('Deepthi')
greet('Sahithya')


// calculate 
// 1 inch 2.54cm

function calculate(value) {
        // console.log(value * 2.54)
        return value * 2.54
    }

let width = calculate(100)
let height = calculate(77)

// console.log(width, height)




// console.log(addTwoValues)
function add(a,b) {
 return a + b 
}
let addTwoValues =  add(5, " test")
// console.log(addTwoValues)





// var displayCout = document.getElementById('displayCounter');




// document.getElementById('increment').onclick=function(){
// displayCout.innerHTML=incrementCounter();
// }
// document.getElementById('decrement').onclick=function(){
// displayCout.innerHTML = decrementCounter();
// }


// let count = 0
// displayCout.innerHTML=count;
// function incrementCounter(){
//     // console.log(count++)
//     if(count > 0) {
//         displayCout.style.backgroundColor ="green"
//     }
//     return count++
// }


// function decrementCounter(){
//     // console.log(count++)
//     if(count < 0) {
//         displayCout.style.backgroundColor ="red"
//     }
//     return count--
// }


let myArr = ['Bob','Anna']
myArr.push('Tom')
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift('Harry')
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits)

myArr.concat(fruits)
console.log(myArr)

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const merge = myArr.concat(fruits)
console.log(merge)

let captain ='peter Heins                           '


console.log('captain length',captain.length)




console.log('window',  this)







const person = {
    name : 'Joseph',
    lastName:'Aramathia',
    age: 55,
    education:false,
    married:true,
    siblings: ['John', 'Jonah'],
    greeting: function () {
        console.log(`Hello my name is ${this.name} ${this.lastName}`)
    }

}


// function in 3 ways
function myFnn() {
        //your logic goes here
        console.log('old style')
}
//calling
myFnn()

var myFnn2 = function(){
    //your logic goes here
    console.log('new style')
}
myFnn2()

//fat arrow fn
var myFnn3 = () => {
       //your logic goes here
       console.log('trending')
}
myFnn3()

//higher order functions
function sayHello() {
    console.log("Hello, world!");
}


function highOrderFn(func) {
    sayHello()
}

highOrderFn(sayHello)

//"Array Methods" => forEach, Map, Filter

const basket = ["apple", "orange", "cherry"];

// forEach method takes a fucntion as an parameter, that cb function iterate
// through all the elements in an array
basket.forEach(function(singleton){
    console.log('each fruit name we get from callback function',singleton)
    })

    let numbers = [2,3,4,5,6]

    let newNumbers = numbers.map(function(number){
    
        return number * 0
    })
    console.log(newNumbers)


    let books = [
        "Great Expectations",
        "The Great Gatsby",
        "Alexander the Great",
        "The Great Alone",
        "The Great Divorce",
        "The Great Hunt",
        "The Great Railway Bazaar",
        "The Game",
        "The Great Influenza",
        "The War and Modern Memory"
      ]
console.log(books.length)
      let newBooks = books.map(function(book) {

        if(book.includes('Great')){
            return book
        }
    })

    console.log(newBooks)
    console.log(newBooks.length)
    
    let newFilterBooks = books.filter(function(book) {

        if(book.includes('Great')){
            return book
        }
    })

    console.log(newFilterBooks)
    console.log(newFilterBooks.length)
      
    let booksList = document.getElementById('heading')
    console.log(booksList)

    booksList.innerHTML = newFilterBooks

    //
   console.log(Math)

   let math_Number = 7.123548
//    console.log(Math.floor((math_Number)))

   let single_number = 85
//    console.log(Math.sqrt(single_number))
//    let sqrt = console.log(Math.sqrt(50))

let randomNumber = console.log("random number",Math.random())

const colors = ['green', 'red', 'blue']