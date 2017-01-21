/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global Audio: false */
/*global console: false */

//globalvariables
var canvas = document.getElementById("maincanvas");
var context = canvas.getContext("2d");
var cwidth = 1600;
var cheight = 900;
var mouseclicked = false;
var mousextrans = 0;
var mousexmod = 1;
var mouseytrans = 0;
var mouseymod = 1;
//localStorage.clear();

//scriptvariables
var mainmenuscript = false;
var bullseyecript = false;
var startingcalibrate = true;
var endscreenscript = false;
var normalgamemodescript = false;
var highscorescript = false;

//declare this script variables
var ismouseactionokay = false;
var isit = 0;


//start elements
document.getElementById("pause").style.display = "none";
document.getElementById("purplehand").style.display = "none";
document.getElementById("mainmenunormal").style.display = "none";
document.getElementById("ismouseactionokay").style.display = "none";
document.getElementById("art1").style.display = "none";
document.getElementById("art2").style.display = "none";
document.getElementById("art3").style.display = "none";


if (typeof (Storage) !== "undefined") {
    var startingscript = setInterval(function () {
        "use strict";
        configuration();
    }, 1000 / 24);
    
    
} else {
    alert("LOCALSTORAGE unaccessible, GAME CANNOT BE PLAYED! (update your browser on your toaster)");
}


function configuration() {
    'use strict';
    if (startingcalibrate) {
        //settling of elements
        document.getElementById("pause").style.display = "none";
        document.getElementById("purplehand").style.display = "none";
        document.getElementById("mainmenunormal").style.display = "none";
        document.getElementById("ismouseactionokay").style.display = "none";
        document.getElementById("returntomain").style.display = "none";

        //background
        context.fillStyle = "rgba(50, 0, 50, 1)";
        context.fillRect(0, 0, cwidth, cheight);

        //calibrate
        if (localStorage.x1 === undefined) {
            context.font = "bold 100px helvetica";
            context.fillStyle = "rgba(255 , 255, 255, 1)";
            context.fillText("Grab the top left corner of", 150, 400);
            context.fillText("your screen at arms length", 150, 500);
            if (mouseclicked) {
                mouseclicked = false;
                localStorage.x1 = mouserawx;
                localStorage.y1 = mouserawy;
            }
        } else if (localStorage.x2 === undefined) {
            context.font = "bold 100px helvetica";
            context.fillStyle = "rgba(255, 255, 255, 1)";
            context.fillText("Grab the bottom right corner of", 50, 400);
            context.fillText("your screen at arms length", 150, 500);
            if (mouseclicked) {
                mouseclicked = false;
                localStorage.x2 = mouserawx;
                localStorage.y2 = mouserawy;
            }
        } else {
            mousextrans = localStorage.x1;
            mouseytrans = localStorage.y1;
            var configx2 = localStorage.x2 - localStorage.x1,
                configy2 = localStorage.y2 - localStorage.y1;
            mousexmod = 1365 / configx2;
            mouseymod = 661 / configy2;
            document.getElementById("purplehand").style.display = "block";
            if (ismouseactionokay) {
                document.getElementById("ismouseactionokay").style.display = "none";
                clearTimeout(deletelocalstorage);
                startingcalibrate = false;
                mainmenuscript = true;
                clearInterval(startingscript);
    
            } else {
                context.fillStyle = "rgba(255, 255, 255, 1)";
                context.font = "bold 50px helvetica";
                context.fillText("Wait for countdown to recalibrate screen", 350, 675);
                setTimeout(function () {
                    if (isit < 2) {
                        isit = 1;
                    }
                }, 1000);
                setTimeout(function () {
                    if (isit < 3) {
                        isit = 2;
                    }
                }, 2000);
                setTimeout(function () {
                    if (isit < 4) {
                        isit = 3;
                    }
                }, 3000);
                var deletelocalstorage = setTimeout(function () {
                    if (!ismouseactionokay) {
                        localStorage.removeItem('x1');
                        localStorage.removeItem('x2');
                        localStorage.removeItem('y1');
                        localStorage.removeItem('y2');
                        location.reload();
                    }
                }, 4000);
                document.getElementById("ismouseactionokay").style.display = "block";
                //is mouse in ismouseactionokay
                if (mousex > 340 && mousex < 1050 && mousey > 295 && mousey < 375) {
                    document.getElementById("ismouseactionokay").style.borderColor = "white";
                    if (mouseclicked) {
                        mouseclicked = false;
                        ismouseactionokay = true;
                    }
                } else {
                    document.getElementById("ismouseactionokay").style.borderColor = "purple";
                }
                context.fillStyle = "rgba(255, 255, 255, 1)";
                context.font = "bold 200px helvetica";
                if (isit > 2) {
                    context.fillText("3", 450, 250);
                    context.fillText("2", 750, 250);
                    context.fillText("1", 1050, 250);
                } else if (isit > 1) {
                    context.fillText("2", 750, 250);
                    context.fillText("3", 450, 250);
                } else if (isit > 0) {
                    context.fillText("3", 450, 250);
                }
                
            }
        }
        
    } else {
        startingcalibrate = false;
        clearInterval(startingscript);
        mainmenuscript = true;
    
    }
}


