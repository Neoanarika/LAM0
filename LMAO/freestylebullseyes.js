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
var abpm = 0;
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
var aud10 = "1/1/1-10.mp3";

function fsbullseyesvarset() {
    startspace = 0;
    fsnoofspacebar = 0;
    aud10 = "1/1/1-10.mp3";
    
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
    //console.log('Fslaspedsec ',fslaspedsec);
    if (!isleapmotionin) {
        if (currentpress > 0) {
            if (startspace < 2) {
                if (!fsnodoublevalue) {
                    fsnoofspacebar +=1;
                    fsnodoublevalue = true;
                    var fssec = fslaspedtime / 1000;
                    var fsbps = fsnoofspacebar / fssec;
                    fsbpm = fsbps * 60;
                }
            }
        }   
    }
    fsnowtime = new Date();
    fslaspedtime = fsnowtime - fsstarttime;
    fslaspedsec = fslaspedtime / 1000;
    if (fsbpm < fsbpm05) {
        abpm = fsbpm05;
        player.col = "rgba(255, 0, 0, 1)";
        player.strokecolor = "rgba(255, 0, 0, 1)";
        player.rad = "60";
        spot.rad = "0";
    } else if (fsbpm < fsbpm06) {
        abpm = fsbpm06;
    } else if (fsbpm < fsbpm07) {
        abpm = fsbpm07;
        player.col = "rgba(255, 0, 127, 1)";
        player.strokecolor = "rgba(255, 0, 127, 1)";
        player.rad = "50";
        spot.rad = "0";
    } else if (fsbpm < fsbpm08) {
        abpm = fsbpm08;
    } else if (fsbpm < fsbpm09) {
        abpm = fsbpm09;
    } else if (fsbpm < fsbpm10) {
        abpm = fsbpm10;
        player.col = "rgba(255, 0, 255, 1)";
        player.strokecolor = "rgba(255, 0, 255, 1)";
        player.rad = "40";
        spot.rad = "0";
    } else if (fsbpm < fsbpm11) {
        abpm = fsbpm11;
    } else if (fsbpm < fsbpm12) {
        abpm = fsbpm12;
    } else if (fsbpm < fsbpm13) {
        abpm = fsbpm13;
        player.col = "rgba(127, 0, 255, 1)";
        player.strokecolor = "rgba(127, 0, 255, 1)";
        player.rad = "30";
        spot.rad = "0";
    } else if (fsbpm < fsbpm14) {
        abpm = fsbpm14;
    } else {
        abpm = fsbpm15;
        player.col = "rgba(0, 0, 255, 1)";
        player.strokecolor = "rgba(0, 0, 255, 1)";
        player.rad = "20";
        spot.rad = "0";
    }
    setTimeout(function() {
        fsprevbpm = abpm;
    }, 1000 / 60);


	if (fsprevbpm !== abpm) {
		audio.playbackRate = abpm / bpm;
		audio.pause;
	}
    
        
    
        

}


var bullseyefs = setInterval(function() {
    freestyleloop();
}, 1000 /5);
clearInterval(bullseyefs);