/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global Audio: false */
/*global console: false */
/*global endofmenu: false */
var canvas = document.getElementById("maincanvas");
var context = canvas.getContext("2d");
var cwidth = 1600;
var cheight = 900;

var songnostar = "0s";

function victorydisplay() {
    'use strict';
    songnostar = songno + "s";
    audio.pause();
    //element sett
    document.getElementById("pause").style.display = "none";
    document.getElementById("purplehand").style.display = "block";
    document.getElementById("mainmenunormal").style.display = "none";
    document.getElementById("ismouseactionokay").style.display = "none";
    document.getElementById("returntomain").style.display = "block";
    
    //highscore set
    localStorage.setItem(songno, point);
    
    //background
    context.fillStyle = "rgba(50, 0, 50, 1)";
    context.fillRect(0, 0, cwidth, cheight);
    
    //screentitle
    context.fillStyle = "white";
    context.font = "bold 75px helvetica";
    context.fillText(songnamestring, endgametitlex, endgametitley);
    context.strokeStyle = "#a32fa3";
    context.strokeText(songnamestring, endgametitlex, endgametitley);
    
    //score
    context.fillStyle = "white";
    context.font = "bold 40px helvetica";
    context.fillText(point + " points out of " + ((songfulltimebeats - interludebeatsplusdelay) * 10), 610, 625);
    
    //stars
    if (fifthstar) {
        star(400, 600, 20, "#cfed07", 20, "white");
        star(600, 550, 20, "#cfed07", 20, "white");
        star(1200, 600, 20, "#cfed07", 20, "white");
        star(1000, 550, 20, "#cfed07", 20, "white");
        star(800, 500, 20, "#cfed07", 20, "white");
        localStorage.setItem(songnostar, 5);
    } else if (fouthstar) {
        star(600, 550, 20, "#cfed07", 20, "white");
        star(1200, 600, 20, "#cfed07", 20, "white");
        star(1000, 550, 20, "#cfed07", 20, "white");
        star(800, 500, 20, "#cfed07", 20, "white");
        if (localStorage.getItem(songnostar) < 5) {
            localStorage.setItem(songnostar, 4);
        }
    } else if (thirdstar) {
        star(600, 550, 20, "#cfed07", 20, "white");
        star(1000, 550, 20, "#cfed07", 20, "white");
        star(800, 500, 20, "#cfed07", 20, "white");
        if (localStorage.getItem(songnostar) < 4) {
            localStorage.setItem(songnostar, 3);
        }
    } else if (secstar) {
        star(1000, 550, 20, "#cfed07", 20, "white");
        star(800, 500, 20, "#cfed07", 20, "white");
        if (localStorage.getItem(songnostar) < 3) {
            localStorage.setItem(songnostar, 2);
        }
    } else if (firststar) {
        star(800, 500, 20, "#cfed07", 20, "white");
        if (localStorage.getItem(songnostar) < 2) {
            localStorage.setItem(songnostar, 1);
        }
    } else {
        if (localStorage.getItem(songnostar) < 1) {
            localStorage.setItem(songnostar, 0);
        }
    }
    
    //claps
    var clapfx = new Audio("clapfx.mp3");
    clapfx.currentTime = 0;
    clapfx.play()
}



