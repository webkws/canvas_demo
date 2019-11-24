function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
function Object(x, y, radius, color) {
  this.x = x
  this.y = y
  this.radius = radius
  this.color = color
}

Object.prototype.draw = function () {
  c.beginPath()
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
  c.fillStyle = this.color
  c.fill()
  c.closePath()
}

Object.prototype.update = function () {

  this.draw()
}

// Implementation
let objects
let circle1;
let circle2;
function init() {
  objects = []

  for (let i = 0; i < 400; i++) {
    // objects.push();
  }

  circle1 = new Object(200, 200, 100, 'red');
  circle2 = new Object(undefined, undefined, 50, 'blue');

}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
circle1.draw()
circle1.update();
circle2.x = mouse.x;
circle2.y = mouse.y;
circle2.update();
  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)

  // objects.forEach(object => {
  //  object.update();
  // });
}

init()
animate()