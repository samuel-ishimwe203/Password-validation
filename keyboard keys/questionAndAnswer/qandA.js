
const container=document.querySelector('.container')

container.addEventListener('click',(event)=>{

    const questions=event.target.closest('.question')
    if(!questions) return;
    event.stopPropagation()

    const currentElement=questions.parentElement;
    const currentAnswer=currentElement.querySelector('.answer')
    currentAnswer.classList.toggle('show')
})