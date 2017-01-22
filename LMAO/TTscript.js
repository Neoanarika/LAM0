/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global Audio: false */
/*global console: false */
/*global endofmenu: false */
var canvas = document.getElementById("maincanvas");
var context = canvas.getContext("2d");
var cwidth = 1600;
var cheight = 900;

function TTvarset() {
    'use strict';
    //change
    bpm = 130;
    obpm = 130;
    music = "3/TT.mp3";
    songfulltimebeats = 454;
    interludebeatsplusdelay = 36;
    songdelayms = 200;
    songnamestring = "TT - Twice";
    titlex = 625;
    titley = 125;
    endgametitlex = 625;
    endgametitley = 175;
    songno = 3;
    part1 = 35;
    part2 = 16;
    part3 = 0;
    part4 = 0;
    part5 = 0;
    part6 = 0;
    part7 = 0;

    
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
function fsTTvarset() {
    startspace = 0;
    fsnoofspacebar = 0;
    aud15 = "3/3/3-15.mp3";
    aud14 = "3/3/3-14.mp3";
    aud13 = "3/3/3-13.mp3";
    aud12 = "3/3/3-12.mp3";
    aud11 = "3/3/3-11.mp3";
    aud10 = "3/3/3-10.mp3";
    aud09 = "3/3/3-9.mp3";
    aud08 = "3/3/3-8.mp3";
    aud07 = "3/3/3-7.mp3";
    aud06 = "3/3/3-6.mp3";
    aud05 = "3/3/3-5.mp3";
    
    //calculate
    fsbpm15 = bpm * 1.5;
    fsbpm14 = bpm * 1.4;
    fsbpm13 = bpm * 1.3;
    fsbpm12 = bpm * 1.2;
    fsbpm11 = bpm * 1.1;
    fsbpm10 = bpm * 1.0;
    fsbpm09 = bpm * 0.9;
    fsbpm08 = bpm * 0.8;
    fsbpm07 = bpm * 0.7;
    fsbpm06 = bpm * 0.6;
    fsbpm05 = bpm * 0.5;
}