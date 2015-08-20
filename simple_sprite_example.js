/**
 * Created by jcc on 8/18/15.
 */


//create the canvas and the 'context' or drawing tool
var canvas;
var context;



//create the canvas and the 'context' or drawing tool
canvas = document.getElementById('simpleDrawingCanvas'); // the object on which we draw on
context = canvas.getContext('2d');    // the tool we use to draw with



context.fillStyle = "#FF0000";
context.fillRect(0, 0, 20, 20);

context.fillRect(100, 100, 50, 20);
context.fill();

canvas.addEventListener("keydown",function(){
   alert("j");
});










