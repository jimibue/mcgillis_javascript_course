/**
 * Created by jcc on 8/18/15.
 */
/**
 * Created by jcc on 8/13/15.
 */
var canvas,
    ctx,
    width,
    height,
    yPos =0;
var squareSize = 100;
var xPos = -1*squareSize;

var count =0 ;

start();

function start() {

    //set up the canvas based of the size of the browsers window
    canvas = document.getElementById('squaresCanvas');
    width = window.innerWidth -20;
    height = window.innerHeight -20;
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');

    //animation function
    var animate =
        function(callback) {
            window.setTimeout(callback, 1000 / 3);
        };



    //Now when the page loads we’ll attach the canvas
    // to the screen and call a step function using our animate method:
    window.onload = function() {
        //document.body.appendChild(canvas);
        start();
        animate(step);

    };

    window.onresize = function() {
        start();

    };

    //The step function will be responsible for doing three things. First it will update all of our objects:
    // the player’s paddle, the computer’s paddle, and the ball.
    // Next it will render those objects. And lastly, it will use requestAnimationFrame to call the step function again:

    var step = function() {
        update(); //update positions of all 'sprites'
        render(); //draw 'sprites'
        animate(step); //repeat
    };


    var update = function() {

        if(xPos+squareSize < width)
            xPos+= squareSize;
        else{
            xPos = 0;
            if(yPos+squareSize < height)
                yPos+=squareSize;
            else{
                yPos = 0;
            }

        }
        count+=2;
    };
    var render = function() {

        //clear previous screen
        context.fillStyle="#FFFFFF";
        context.fillRect(0,0,width,height);


        ctx.fillStyle = "hsla( " + (xPos/15 + (yPos%100) + count)%360 +", 65%, 70%, .9)";
        ctx.fillRect(xPos+5, yPos+5, squareSize-5, squareSize-5);
        ctx.fill();
    };
}
