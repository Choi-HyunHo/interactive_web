const user = document.querySelector('.user')
const rose = document.querySelector('.rose')

let x = 0
let y = 0
let mouseX = 0
let mouseY = 0
let speed = 0.03

window.onload = function () {
  window.addEventListener('mousemove', mouseMove)
  function mouseMove(e) {
    x = e.clientX - window.innerWidth / 2
    y = e.clientY - window.innerHeight / 2
  }
  loop()
}

function loop() {
  mouseX += (x - mouseX) * speed
  mouseY += (y - mouseY) * speed
  user.style.transform = `translate(${-mouseX / 6}px, ${-mouseY / 6}px)`
  rose.style.transform = `translate(${mouseX / 4}px, ${mouseY / 4}px)`
  window.requestAnimationFrame(loop)
}
