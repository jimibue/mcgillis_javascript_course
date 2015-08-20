/**
 Created by James Yeates on 8/20/15.

 Intro to Javascript

 Javascript is the language of the web. Here we will look at some basic
 aspects of Javascript.  To get started with this demonstration
 open index.html with Chrome and right click and select inspect element
 find the Tab the says console, click on that tab.  You can directly type
 Javascript in the console, which is a good way to start learning javascript.
 */

//console.log is a method that prints a message to the console.
console.log("Hello World");

// like all programming languages javascript is good at math
// Javascript supports the following operations

// + addition
// - subtraction
// * multiplication
// / division
// % modulus - returns the remainder of division and is often useful in programming

// Javascript also has a 'Math Object' that can be used to perform other operations
/****Link *****/
console.log( Math.round(3.3) );


// Javascript follows the order of operations
/****fill in*****/
///Primitive types in Javascript
//Primitive types include number, string, boolean, null and undefined. To figure out
// the type of something us the typeof() function
console.log(typeof(1));

//Number >>> 1, 1.0, -2,  2e23, NaN, Infinity, -Infinity
console.log(2/0);
console.log(0/0);
console.log(Number.MAX_VALUE * 2);
console.log(Math.pow(2,64));


//confusing example on floating point and rounding error
console.log(.3 - .2);
console.log(.2 - .1);

//String >>> a sequence of characters used for representing text, to create a string use a matched
//pair of double quotes "" or single quotes ''.
console.log("I am a String");
console.log('I am a also a String');

//concatenate - combing multiple strings together
console.log("hello" + " " +"world" );

//strings have methods you can invoke
console.log("I am a String".length);
console.log("I am a String".charAt(0));





//Everything else is an Object including the function which is a special type of Object
