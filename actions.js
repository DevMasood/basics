
var a =1
var b =2

var c = a - b

//  alert(c)




var firstName = "John"
var lastName = " Corner"

// var fullName = firstName + ' ' + lastName 

// var testName = firstName + lastName

// alert(testName)





// alert(firstName)


var person = 'Joseph'
var age = 35

var getInfo = person / age

// alert(getInfo)

var sunday = true

// if (sunday) {
//  alert('School Holiday')   
// } else {
//     alert('School WorkingDay')   
// }



var timepass;
// alert(timepass)

const weeklyExpenses = [50, 75, 100, 60, 90, 80, 120];

console.log(weeklyExpenses[weeklyExpenses.length-1])



const weeklySchedule = {
    Monday: ["Meeting at 10 AM", "Lunch with team", "Work on project"],
    Tuesday: ["Gym at 6 AM", "Client call", "Work on reports"],
    Wednesday: ["Team brainstorming", "Lunch with client", "Finish tasks"],
    Thursday: ["Work on presentation", "Project review", "Dinner with family"],
    Friday: ["Weekly wrap-up", "Happy hour", "Prepare for next week"]
}

console.log(weeklySchedule.Monday.length)



{/* <div class="container">
    <h1>hello world</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus amet expedita quos quam est officiis minus error natus, impedit labore dolores soluta hic aspernatur deserunt atque qui perferendis. Qui, aspernatur?</p>


    </div> */}

var body = document.querySelector('body')
console.log(body)

var container = document.createElement('div');
container.className = 'container'
body.appendChild(container)
console.log(container)

var header = document.createElement('h1');
header.innerHTML = 'Hello World'
container.appendChild(header)



var para = document.createElement('p');
para.textContent = "Lorem ipsum consectetur adipisicing elit. "
container.appendChild(para)



var image = document.createElement('img')
// image.src = './1.jpg'
image.setAttribute('src', './1.jpg')
image.setAttribute('alt', 'nature')
container.appendChild(image)




