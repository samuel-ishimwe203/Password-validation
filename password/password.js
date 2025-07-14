
const btn=document.getElementById('btn')
    btn.addEventListener('click',()=>{
        const inp=document.getElementById('password')
         const values=inp.value
       
        
       

        if(/[A-Z]/.test(values) && values.length>8){
             const hidden = inp.type==='password'
             inp.type=hidden?'text':'password'
             btn.textContent=hidden?'Hide':'Show'
        }
        else{
            alert('password must have atleast one captal letter and character is more than 8 character')
        }
       
    })


