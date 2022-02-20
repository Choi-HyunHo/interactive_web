const title = document.querySelector('h1')
const box = document.querySelector('.box')
const boxRect = box.getBoundingClientRect()

const boxWidth = boxRect.width / 2
const boxHeight = boxRect.height 

window.addEventListener('mousemove',(e)=>{
    title.innerHTML = `X : ${e.clientX}, Y : ${e.clientY}`
    box.style.transform = `translate(${e.clientX - boxWidth}px, ${e.clientY- boxHeight}px)`
})