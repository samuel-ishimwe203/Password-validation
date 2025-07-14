
function addItem(){

const input=document.getElementById('myInput')
const items=document.getElementById('items')

     const inputItem =input.value
     if(inputItem. trim() ==='')return;

     const li=document.createElement('li')
     li.innerText=inputItem;


     const completed=document.createElement('button')
         completed.innerText='complete'
         completed.style.marginLeft='50px'
         completed.onclick=function(){
            li.classList.toggle('complete')
         }
         li.appendChild(completed)
     
     const deleteBtn=document.createElement('button')
     deleteBtn.innerText='delete'
     deleteBtn.style.marginLeft='50px'
     deleteBtn.onclick=function(){
        li.remove()
     }
       li.appendChild(deleteBtn)

       items.appendChild(li)

        input.value=''

       

   }