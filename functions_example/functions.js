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


// setInterval( ()=> {
   
// } , 1000)

const allBooks = [
    "The Great Gatsby by F. Scott Fitzgerald",
    "Great Expectations by Charles Dickens",
    "The Great Alone by Kristin Hannah",
    "Great by Choice by Jim Collins",
    "The Great Influenza by John M. Barry",
    "To Kill a Mockingbird by Harper Lee",
    "1984 by George Orwell",
    "Pride and Prejudice by Jane Austen",
    "Moby Dick by Herman Melville",
    "The Catcher in the Rye by J.D. Salinger"
];
console.log(allBooks)
let newBooks;
allBooks.filter((book)=> {
     if(book.includes('Great')){
       
       
         newBooks = book
        console.log(newBooks)
return newBooks
    }
})
console.log(allBooks)

const employees = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 42 },
    { name: "Diana", age: 30 }
  ];

//   > 30 


let data = employees.filter((employee)=> {
    if(employee.age > 30){
        console.log(employee)
        return employee
    }
})
console.log(data)