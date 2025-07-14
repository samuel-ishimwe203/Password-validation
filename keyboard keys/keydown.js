
const bt=document.getElementById('myBT')
let moveAmount=100;
let x=0;
let y=0;



document.addEventListener('keypress', () =>{
  
    bt.textContent="😁"
    bt.style.backgroundColor='red'
  
})

document.addEventListener('keyup',()=>{
    bt.textContent="😒"
    bt.style.backgroundColor='lightblue'
})

document.addEventListener('keydown',event=>{
    event.preventDefault();

    if(event.key.startsWith('Arrow')){

        switch(event.key){

            case"ArrowUp":
            y-=moveAmount;
            break;

             case"ArrowDown":
            y+=moveAmount;
            break;

             case"ArrowLeft":
            x-=moveAmount;
            break;

             case"ArrowRight":
            x+=moveAmount;
            break;
        }
        bt.style.top=`${y}px`
        bt.style.left=`${x}px`


    }

})