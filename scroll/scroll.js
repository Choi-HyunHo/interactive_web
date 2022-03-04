let scrollTop = 0
let bar = document.querySelector('.bar')
let bar2 = document.querySelector('.bar-2')
let cloud = document.querySelector('.cloud')

window.addEventListener('scroll', (e) => {
  scrollTop = document.documentElement.scrollTop

  let percent = Math.ceil(
    (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
  )

  bar.style.width = percent + '%'
  bar2.style.height = percent + '%'
  cloud.style.transform = `translateY(${scrollTop / 1.2}px)`
})
