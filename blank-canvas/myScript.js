/**
 * Created by James Yeates on 9/22/15.
 */

//    Select the canvas
var canvas = document.getElementById("myCanvas");

//create the context, the tool that is used to draw
var paintTool = canvas.getContext('2d');

//change the fill color
paintTool.fillStyle ="red";


//fillRect(x,y,width, height)
paintTool.fillRect(200,200,100,100);

