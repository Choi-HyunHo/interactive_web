const imgArr = document.querySelectorAll('img')
const bird = document.querySelector('.vod')

let x = 0
let y = 0
let mouseX = 0
let mouseY = 0
let speed = 0.02

window.onload = function () {
  window.addEventListener('mousemove', mouseMove)
  function mouseMove(e) {
    x = e.clientX
    y = e.clientY
    title.innerHTML = `X : ${x}, Y : ${y}`
  }
  loop()
}

function loop() {
  mouseX += (x - mouseX) * speed
  mouseY += (y - mouseY) * speed
  imgArr[0].style.transform = `translate(${mouseX / 6}px, ${mouseY / 6}px)`
  imgArr[1].style.transform = `translate(${mouseX / 5}px, ${mouseY / 5}px)`
  imgArr[2].style.transform = `translate(${mouseX / 4}px, ${mouseY / 4}px)`
  imgArr[3].style.transform = `translate(${mouseX / 3}px, ${mouseY / 3}px)`
  bird.style.transform = `translate(${mouseX / 3}px, ${mouseY / 3}px)`
  window.requestAnimationFrame(loop)
}
