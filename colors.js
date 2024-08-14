let colors = ['red', 'green', 'blue', 'yellow']
let myColors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];





let btn = document.querySelector('.btn')
// console.log(btn) 

let clr = document.querySelector('.color')
// console.log(clr)

btn.addEventListener("click", function(){

//random number
// console.log(Math.floor(Math.random()*colors.length))
let randomNumber = Math.floor(Math.random()*colors.length)
console.log(randomNumber)

    // alert('you clicked me')
    document.body.style.backgroundColor = colors[randomNumber]
    clr.innerHTML = colors[randomNumber]
})






//
 var displayCounter = document.getElementById('displayCounter')
 const increment = document.getElementById('increment')
 const decrement = document.getElementById('decrement')
 const reset = document.getElementById('reset')
 console.log(displayCounter,increment,decrement,reset)

var count = 0
 increment.addEventListener('click', function(){
    displayCounter.innerHTML = count++
    if (count > 0){
        console.log("hello",count)
        displayCounter.style.backgroundColor ="green"
     }
 })
 decrement.addEventListener('click', function(){
    if(count < 0) {
        displayCounter.style.backgroundColor = 'red'
         }
         
    displayCounter.innerHTML = count--
 })
 reset.addEventListener('click', function(){
    displayCounter.innerHTML = 0
 })


 const fruits = ["apple", "orange", "cherry"];
 fruits.forEach((yyy)=> {
    console.log(yyy)
 })

const team = "Welcome to our team"

const emp1 = 'Rahul'
const emp2 = 'Sai'
const emp3 = 'Deepthi'

// console.log("Welcome to our team Mr. Rahul")
// console.log("Welcome to our team Mr. Sai")
// console.log("Welcome to our team Mrs. Deepthi")


const greet = (emp_name) => {
console.log('Welcome to our Team' + ' ' + emp_name)
}

greet('Rahul')
greet('Masood')

greet('Sai')
greet('Deepthi')