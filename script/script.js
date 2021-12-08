const mounts = document.querySelectorAll('.mount')
const birds = document.querySelectorAll('.bird')
const clouds = document.querySelector('.clouds')
const sea = document.querySelector('.sea')
const sun = document.querySelectorAll('.sun img')


window.addEventListener('scroll', () => {
  let sideY = window.scrollY

  mounts.forEach((mount) => {
    mount.style.transform = `translateY(${sideY * 0.15}px)`
  })

  birds.forEach((bird) => {
    let speed = bird.getAttribute('data-speed')
    bird.style.transform = `translate(${sideY * speed}px, ${sideY * speed}px)`
  })

  sun.forEach((sunlight) => {
    sunlight.style.transform = `translate(${sideY * -0.3}px, ${sideY * 0.35}px)`
  })

  clouds.style.transform = `translateX(${sideY * -0.2}px)`;
  sea.style.transform = `translateX(${sideY * -0.5}px)`;

})