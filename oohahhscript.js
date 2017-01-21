/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global Audio: false */
/*global console: false */
/*global endofmenu: false */
var canvas = document.getElementById("maincanvas");
var context = canvas.getContext("2d");
var cwidth = 1600;
var cheight = 900;

function oohahhvarset() {
    'use strict';
    //change
    bpm = 142;
    music = "0/oohahh142.mp3";
    songfulltimebeats = 506;
    interludebeatsplusdelay = 34;
    songdelayms = 200;
    songnamestring = "Ooh Ahh - Twice";
    titlex = 500;
    titley = 125;
    endgametitlex = 500;
    endgametitley = 175;
    songno = 0;

    
    //dont change
    point = 0;
    pressscore = 0;
    pressedyet = 0;
    currentpress = 0;
    goodbad = 0;
    gamepause = false;
    signal = 0;
    loopside = false;
    resumed = true;
    audio = new Audio(music);
    startspace = 0;
    laspedtime = 0;
    centerbutton = false;
    starttime = new Date();
    pausebuttonover = false;
    isunpausing = true;
    mouseclicked = false;
    currentbeat = 0;
    justcountedbeat = false;
    firststar = false;
    secstar = false;
    thirdstar = false;
    fouthstar = false;
    fifthstar = false;
    count = 0;
    //calcuations
    if (bpm < 60) {
        framelimit = 120;
    } else if (bpm < 120) {
        framelimit = 80;
    } else if (bpm < 240) {
        framelimit = 60;
    } else {
        framelimit = 40;
    }
    framedivide = framelimit / 160;
    bps = bpm / 60;
    spb = 60 / bpm;
    fps = bps * framelimit;
}
