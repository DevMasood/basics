
var colors = ['red','green','blue']

var btn = document.querySelector('.btn')
var body = document.querySelector('body')
console.log(btn)


btn.addEventListener('click', function(){
    console.log('hello')
    var random = Math.floor(Math.random()* colors.length)
    console.log(random)
    for(var i = 0; i <= colors.length; i++){
        body.style.backgroundColor = colors[random]
    }

})