// let count = 0
// //bind html tags with JS
// // const btns = document.querySelectorAll('.btn')
// const decrease_btn = document.querySelector('.decrease')
// // console.log(decrease_btn)
// const reset_btn = document.querySelector('.reset')
// // console.log(reset_btn)
// const increase_btn = document.querySelector('.increase')
// // console.log(increase_btn)
// const value = document.getElementById('value')
// console.log(value)

// decrease_btn.addEventListener('click', function(){
//     console.log('decrease btn clicked')

//     count--
//     console.log(count)
//     value.innerHTML = count
//     if(count < 0){
//         value.style.color = "red"
//     }
// })
// reset_btn.addEventListener('click', function(){
//     console.log('reset btn clicked')
//     count = 0
//     console.log(count)
//     value.innerHTML = count
//     if(count == 0){
//          value.style.color = "white"
//     }
// })
// increase_btn.addEventListener('click', function(){
//     console.log('increase btn clicked')
//     count++
//     console.log(count)
//     value.innerHTML = count
//     if(count > 0){
//         value.style.color = "green"
//     }
// })

// value.innerHTML = count

let count = 0
const btns = document.querySelectorAll('.btn')
const value = document.getElementById('value')


console.log(btns)
btns.forEach(function(btn){
    // console.log(btn)
    btn.addEventListener('click', function(event){
        // console.log(event.currentTarget.classList)
        const styles = event.currentTarget.classList

       if(styles.contains('decrease')){
        console.log("im the decrease button")
        count--
        if(count < 0 ){
            value.style.color = "red"
        }
       }else if(styles.contains('increase')){
        console.log("im the increase button")
        count++
        if(count > 0 ){
            value.style.color = "yellow"
        }
       }else{
        console.log("im the reset button")
        count = 0
        value.style.color = "white"
    }

    value.textContent = count
   })
})