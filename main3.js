var canvas = document.getElementById('myCanvasThree');
var context = canvas.getContext('2d');

var sizeX = 250;
var sizeY = 50;
var sizeYTimesTwo = sizeY * 2;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var canvasCenterWidth = canvasWidth / 2;
var canvasCenterHeight = canvasHeight / 2;

var positionX = canvasWidth * 0.222;
var positionY = canvasHeight * 0.25;

context.fillStyle = 'red';
context.fillRect(positionX, positionY, sizeX, sizeY);

context.fillStyle = 'white';
context.fillRect(positionX, positionY + sizeY, sizeX, sizeY);

context.fillStyle = 'green';
context.fillRect(positionX, positionY + sizeYTimesTwo, sizeX, sizeY);
