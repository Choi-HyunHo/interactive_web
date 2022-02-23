const title = document.querySelector('h1')
let x = 0
let y = 0
let mouseX = 0
let mouseY = 0
let speed = 0.03

window.onload = function(){
    box = document.querySelector('.box')
    window.addEventListener('click', mouseClick)
    function mouseClick(e){
        x = e.clientX
        y = e.clientY
        box.style.transform = `translate(${x}px, ${y}px)`
    }
    //loop()
}

// function loop(){
//     mouseX += (x - mouseX) * speed
//     mouseY += (y - mouseY) * speed
//     box.style.transform = `translate(${mouseX}px, ${mouseY}px)`
//     window.requestAnimationFrame(loop)
// }