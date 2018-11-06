const myparagraph = document.getElementById('MyElement')
const colorbutton = document.getElementById('colorbutton')
const usercolorinput = document.getElementById('colors')

colorbutton.addEventListener('click', () => {
  myparagraph.style.color = usercolorinput.value
})
