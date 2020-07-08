var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var size = 100;
var padding = 10;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;


context.fillStyle = 'green';
context.fillRect(canvasWidth - size - padding, canvasHeight - size - padding, size, size);