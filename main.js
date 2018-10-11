var c = document.getElementById("playArea");
var ctx = c.getContext("2d");

//drawing the dark grey canvas
ctx.moveTo(0,0);
ctx.fillStyle="#6f6f6f";
ctx.fillRect(0,396,1408,396);
ctx.stroke();

//drawing the light grey canvas
ctx.beginPath();
ctx.rect(0,0,1408,396);
ctx.strokeStyle="#222222";
ctx.stroke();

//drawing the player
ctx.beginPath();
ctx.rect(0,100,300,100);
ctx.strokeStyle="red";
ctx.stroke();
