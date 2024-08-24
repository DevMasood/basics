let btns = document.querySelectorAll('.btn');
// console.log(btns)
let player1= document.getElementById('player1_score_count')
let player2 = document.getElementById('player2_score_count')
let reset = document.querySelector('.reset')
let count = 0

btns.forEach((btn)=> {
    btn.addEventListener('click',(e)=> {
      // console.log(e.currentTarget.dataset.id)
      const id = e.currentTarget.dataset.id
      
      if(id === 'player1'){
       
        // alert('im player 1')
        count = ++count
        console.log(count)
        player1.textContent = count
        if(count === 5){
          alert('Player 1 WON')
          player1.textContent = 0
          count = 0
        }
      }else if(id === 'player2'){
        // let count = 0
        // alert('im player 2')
        count = ++count
        player2.textContent = count
        if(count === 5){
           alert('Player 2 WON')
          player2.textContent = 0
          count = 0
        }
      }else{
        // alert('im reset only option')
        player1.textContent = 0
        player2.textContent = 0      }
    })
})
