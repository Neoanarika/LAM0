/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global Audio: false */
/*global console: false */
/*global endofmenu: false */
var canvas = document.getElementById("maincanvas");
var context = canvas.getContext("2d");
var cwidth = 1600;
var cheight = 900;

var fsstarttime = 0;
var fsnowtime = 0;
var fslaspedtime = 0;
var fsnoofspacebar = 0;
var fsnodoublevalue = false;
var fsbpm = 0;
var fsbpm15 = 0;
var fsbpm14 = 0;
var fsbpm13 = 0;
var fsbpm12 = 0;
var fsbpm11 = 0;
var fsbpm10 = 0;
var fsbpm09 = 0;
var fsbpm08 = 0;
var fsbpm07 = 0;
var fsbpm06 = 0;
var fsbpm05 = 0;
var fsprevbpm = 0;
var fslaspedsec = 0;
var fsmusictime = 0;
var aud15 = "1/1/1-15.mp3";
var aud14 = "1/1/1-14.mp3";
var aud13 = "1/1/1-13.mp3";
var aud12 = "1/1/1-12.mp3";
var aud11 = "1/1/1-11.mp3";
var aud10 = "1/1/1-10.mp3";
var aud09 = "1/1/1-9.mp3";
var aud08 = "1/1/1-8.mp3";
var aud07 = "1/1/1-7.mp3";
var aud06 = "1/1/1-6.mp3";
var aud05 = "1/1/1-5.mp3";

function fsbullseyesvarset() {
    startspace = 0;
    fsnoofspacebar = 0;
    aud15 = "1/1/1-15.mp3";
    aud14 = "1/1/1-14.mp3";
    aud13 = "1/1/1-13.mp3";
    aud12 = "1/1/1-12.mp3";
    aud11 = "1/1/1-11.mp3";
    aud10 = "1/1/1-10.mp3";
    aud09 = "1/1/1-9.mp3";
    aud08 = "1/1/1-8.mp3";
    aud07 = "1/1/1-7.mp3";
    aud06 = "1/1/1-6.mp3";
    aud05 = "1/1/1-5.mp3";
    
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
function freestyleloop() {
    console.log(music);
    fslaspedsec = fslaspedtime / 1000;
    if (currentpress > 0) {
        fsnowtime = new Date();
        fslaspedtime = fsnowtime - fsstarttime;
        if (startspace < 2) {
            if (!fsnodoublevalue) {
                fsnoofspacebar +=1;
                fsnodoublevalue = true;
            }
        }
        var fssec = fslaspedtime / 1000;
        var fsbps = fsnoofspacebar / fssec;
        fsbpm = fsbps * 60;
    }   

        
    if (fsbpm < fsbpm05) {
        bpm = fsbpm05;
    } else if (fsbpm < fsbpm06) {
        bpm = fsbpm06;
    } else if (fsbpm < fsbpm07) {
        bpm = fsbpm07;
    } else if (fsbpm < fsbpm08) {
        bpm = fsbpm08;
    } else if (fsbpm < fsbpm09) {
        bpm = fsbpm09;
    } else if (fsbpm < fsbpm10) {
        bpm = fsbpm10;
    } else if (fsbpm < fsbpm11) {
        bpm = fsbpm11;
    } else if (fsbpm < fsbpm12) {
        bpm = fsbpm12;
    } else if (fsbpm < fsbpm13) {
        bpm = fsbpm13;
    } else if (fsbpm < fsbpm14) {
        bpm = fsbpm14;
    } else {
        bpm = fsbpm15;
    }
    setTimeout(function() {
        fsprevbpm = bpm;
    }, 1000 / 60);

    if (Math.abs(fsprevbpm - bpm) > 0) {
        audio.pause();
        if (fsbpm < fsbpm05) {
            music = aud05;
            fsmusictime = fslaspedsec/ 0.5 ;
        } else if (fsbpm < fsbpm06) {
            music = aud06;
            fsmusictime = fslaspedsec / 0.6 ;
        } else if (fsbpm < fsbpm07) {
            music = aud07;
            fsmusictime = fslaspedsec / 0.7;
        } else if (fsbpm < fsbpm08) {
            music = aud08;
            fsmusictime = fslaspedsec / 0.8;
        } else if (fsbpm < fsbpm09) {
            music = aud09;
            fsmusictime = fslaspedsec / 0.9;
        } else if (fsbpm < fsbpm10) {
            music = aud10;
            fsmusictime = fslaspedsec / 1.0;
        } else if (fsbpm < fsbpm11) {
            music = aud11;
            fsmusictime = fslaspedsec / 1.1;
        } else if (fsbpm < fsbpm12) {
            music = aud12;
            fsmusictime = fslaspedsec / 1.2;
        } else if (fsbpm < fsbpm13) {
            music = aud13;
            fsmusictime = fslaspedsec / 1.3;
        } else if (fsbpm < fsbpm14) {
            music = aud14;
            fsmusictime = fslaspedsec / 1.4;
        } else {
            music = aud15;
            fsmusictime = fslaspedsec / 1.5;
        }
        audio = new Audio(music);
        audio.currentTime = fsmusictime;
        audio.play();
        gamecalulation();
        clearInterval(gameplay);
        gameplay = setInterval(function () {
            game();
        }, 1000 / fps);
        
    }
        

}


var bullseyefs = setInterval(function() {
    freestyleloop();
}, 1000 /10);
clearInterval(bullseyefs);