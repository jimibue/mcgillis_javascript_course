/**
 * Created by James Yeates on 8/18/15.
 *
 */

// variable declaration

    var canvas; // the object on which we draw on
    var ctx;    // the tool we use to draw with
    var width;  // variable used to keep track of the width of browser and canvas
    var height; // variable used to keep track of the height of browser and canvas

    var xPos = 0;

//call the function start and begin drawing
start();

function start() {

    //set up the canvas based of the size of the browsers window
    canvas = document.getElementById('simpleAnimationCanvas');
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width-50;
    canvas.height = height-100;
    ctx = canvas.getContext('2d');

    //animation function
    var animate =
        function (callback) {
            console.log("called");
            window.setTimeout(callback, 1000 / 200);
        };


    //When the page loads we’ll call the draw_next_frame function using the animate method:
    window.onload = function () {
        animate(draw_next_frame);
    };

    //if window size is changed call restart
    window.onresize = function () {
        start();
    };

    //The draw_next_frame function will be responsible for doing three things. First it will update all of our objects:
    // the player’s paddle, the computer’s paddle, and the ball.
    // Next it will render those objects. And lastly, it will use requestAnimationFrame to call the draw_next_frame function again:

    var draw_next_frame = function () {
        update(); //update positions of all 'sprites'
        render(); //draw 'sprites'
        animate(draw_next_frame); //repeat
    };


    var update = function () {
            xPos++;
    };

    //
    var render = function () {

        //clear previous screen
        ctx.fillStyle="#FFFFFF";
        ctx.fillRect(0,0,width,height);

        ctx.fillStyle = "#FFF000";
        ctx.fillRect(xPos, 0, 30, 30);
        ctx.fill();
    };
}

