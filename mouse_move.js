const title = document.querySelector('h1')
let box
let x = 0 
let y = 0 
let mouseX = 0
let mouseY = 0
let speed = 0.03


window.onload = function(){
    box = document.querySelector('.box')
    window.addEventListener('mousemove', mouseMove)
    function mouseMove(e){
         x = e.clientX
         y = e.clientY
        title.innerHTML = `X : ${x}, Y : ${y}`
    }
    loop()
}

function loop() {
    mouseX += (x-mouseX) * speed
    mouseY += (y-mouseY) * speed
    box.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    window.requestAnimationFrame(loop)
}