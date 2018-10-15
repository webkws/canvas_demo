var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var innerWidth = canvas.width;
var innerHeight = canvas.height;
var c = canvas.getContext('2d');
var mouse = {
  x: undefined,
  y: undefined
}
var maxRadius = 40;
var minRadius = 2;
var colorArr = [
  '#2C3E50',
  '#E74C3C',
  '#ECF0F1',
  '#3498DB',
  '#2980B9',
];
window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
})

window.addEventListener('resize', function (e) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArr[Math.floor(Math.random() * colorArr.length)];
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.strokeStyle = 'blue';
    c.fillStyle = this.color;
    // c.stroke();
    c.fill();
  }
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    // interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
    this.draw()
  }
}
var circleArr = [];
function init() {
  circleArr = [];
  for (var i = 0; i < 800; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius
    var y = Math.random() * (innerHeight - radius * 2) + radius
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    circleArr.push(new Circle(x, y, dx, dy, radius))
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArr.length; i++) {
    circleArr[i].update()
  }
}
init();
animate();