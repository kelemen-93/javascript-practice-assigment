var canvas = document.getElementById('myCanvasFive');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var triangleBase = 150;
var triangleHeight = 150;

var positionX = (canvasWidth - triangleBase) / 2;
var positionY = canvasHeight - (triangleHeight / 2);

context.beginPath();
context.moveTo(positionX, positionY);
context.lineTo(positionX + triangleBase, positionY);
context.lineTo(positionY, positionY - triangleHeight);
context.closePath();

context.strokeStyle = 'rgba(128, 128, 128, 0.5)';
context.stroke();

context.fillStyle = 'rgba(255, 165, 0, 0.5)';
context.fill();