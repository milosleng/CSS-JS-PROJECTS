const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const pickColor = document.getElementById('color');
const clear = document.getElementById('clear');
const spanSize = document.getElementById('size');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size = 20;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawline(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

//func to draw a circle
function drawCircle(x, y) {
  ctx.beginPath();

  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}

//func to draw a line
function drawline(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

//clearing the canvas
clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//decrease line-size
decrease.addEventListener('click', () => {
  size--;
  spanSize.innerText--;
  if (Number(spanSize.innerText) < 1) {
    spanSize.innerText = '0';
    size = 1;
  }
});

//increase line-size
increase.addEventListener('click', () => {
  size++;
  spanSize.innerText++;
  if (Number(spanSize.innerText) > 100) {
    spanSize.innerText = '100';
    size = 100;
  }
});

//change color
function changeColor() {
  const colorPicked = pickColor.value;
  color = colorPicked;
}

pickColor.addEventListener('mouseleave', changeColor);
