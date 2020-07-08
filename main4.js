var canvas = document.getElementById('myCanvasFour');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(0, 0);
context.lineTo(450, 300);
context.strokeStyle = 'red';
context.stroke();

context.beginPath();
context.moveTo(0, 300);
context.lineTo(450, 0);
context.strokeStyle = 'red';
context.stroke();

