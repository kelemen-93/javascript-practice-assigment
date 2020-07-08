var canvas = document.getElementById('myCanvasTwo');
var context = canvas.getContext('2d');

var size = 100;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var canvasCenterWidth = canvasWidth / 2;
var canvasCenterHeight = canvasHeight / 2;
var fourthOfSquare = size / 4;

context.fillStyle = 'rgba(0, 0, 255, 0.5)';
context.fillRect(canvasCenterWidth - fourthOfSquare, canvasCenterHeight - fourthOfSquare, size, size);

context.fillStyle = 'rgba(255, 0, 0, 0.5)';
context.fillRect(canvasCenterWidth + fourthOfSquare, canvasCenterHeight + fourthOfSquare, -size, -size);


/* Painted the fourth of the canvas to see where is the center positioned visually */
context.fillStyle = 'rgba(0, 0, 0, 0.5)';
context.fillRect(canvasCenterWidth, canvasCenterHeight, canvasCenterWidth, canvasCenterHeight);