/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global Audio: false */
/*global console: false */
/*global endofmenu: false */
var canvas = document.getElementById("maincanvas");
var context = canvas.getContext("2d");
var cwidth = 1600;
var cheight = 900;


//START OF MAIN GAME
//var
var mousex = 0;
var mousey = 0;
var mouserawx = 0;
var mouserawy = 0;

//var that need to refresh on start
var bpm = 88;
var point = 0;
var pressscore = 0;
var pressedyet = 0;
var currentpress = 0;
var goodbad = 0;
var gamepause = false;
var signal = 0;
var loopside = false;
var resumed = true;
var music = "1/bullseye88.mp3";
var audio = new Audio(music);
var startspace = 0;
var songfulltimebeats = 249;
var laspedtime = 0;
var centerbutton = false;
var starttime = new Date();
var pausebuttonover = false;
var isunpausing = true;
var mouseclicked = false;
var interludebeatsplusdelay = 18;
var currentbeat = 0;
var justcountedbeat = false;
var songdelayms = 1363.63;
var firststar = false;
var secstar = false;
var thirdstar = false;
var fouthstar = false;
var fifthstar = false;
var songnamestring = "Bulleyes - Carly Rae Jepsen";
var titlex = 450;
var titley = 450;
var endgametitlex = 300;
var endgametitley = 175;
var framelimit = 0;
var framedivide = 1;
var bps = 1;
var spb = 1;
var fps = 30;
var count = 0;
var songno = 1;
var part1 = 64;
var part2 = 32;
var part3 = 100;
var part4 = 32;
var part5 = 128;
var part6 = 36;
var part7 = 107;
var obpm = 88;
var huered = false;
var huegreen = false;


function bulleyesvarset() {
    'use strict';
    bpm = 88;
    point = 0;
    pressscore = 0;
    pressedyet = 0;
    currentpress = 0;
    goodbad = 0;
    gamepause = false;
    signal = 0;
    loopside = false;
    resumed = true;
    music = "1/bullseye88.mp3";
    audio = new Audio(music);
    startspace = 0;
    songfulltimebeats = 250;
    laspedtime = 0;
    centerbutton = false;
    starttime = new Date();
    pausebuttonover = false;
    isunpausing = true;
    mouseclicked = false;
    interludebeatsplusdelay = 18;
    currentbeat = 0;
    justcountedbeat = false;
    songdelayms = 1263.63;
    firststar = false;
    secstar = false;
    thirdstar = false;
    fouthstar = false;
    fifthstar = false;
    songnamestring = "Bulleyes - Carly Rae Jepsen";
    titlex = 325;
    titley = 125;
    endgametitlex = 300;
    endgametitley = 175;
    count = 0;
    songno = 1;
    part1 = 64;
    part2 = 32;
    part3 = 100;
    part4 = 32;
    part5 = 128;
    part6 = 36;
    part7 = 107;

}

function gamecalulation() {
    //calcuations
    if (bpm < 60) {
        framelimit = 100;
    } else if (bpm < 120) {
        framelimit = 80;
    } else if (bpm < 140) {
        framelimit = 60;
    } else {
        framelimit = 40;
    }
    framedivide = framelimit / 160;
    bps = bpm / 60;
    spb = 60 / bpm;
    fps = bps * framelimit;
}



function circle(x, y, rad, col, wid, strokecolor) {
    "use strict";
    context.beginPath();
    context.arc(x, y, rad, 0, 2 * Math.PI, false);
    context.fillStyle = col;
    context.fill();
    context.lineWidth = wid;
    context.strokeStyle = strokecolor;
    context.stroke();
}
function star(x, y, rad, col, wid, strokecolor) {
    'use strict';
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + (2 * rad), y - (5 * rad));
    context.lineTo(x + (7 * rad), y - (5.5 * rad));
    context.lineTo(x + (3.5 * rad), y - (9 * rad));
    context.lineTo(x + (5 * rad), y - (14 * rad));
    context.lineTo(x, y - (11.5 * rad));
    context.lineTo(x - (5 * rad), y - (14 * rad));
    context.lineTo(x - (3.5 * rad), y - (9 * rad));
    context.lineTo(x - (7 * rad), y - (5.5 * rad));
    context.lineTo(x - (2 * rad), y - (5 * rad));
    context.lineTo(x, y);
    context.lineTo(x + (2 * rad), y - (5 * rad));
    context.fillStyle = col;
    context.fill();
    context.lineWidth = wid;
    context.strokeStyle = strokecolor;
    context.stroke();
}


var keys = [];

var player = {
    x: 800,
    y: 450,
    rad: 20,
    col: "#800080",
    wid: 0,
    strokecolor: "purple"
};

var spot = {
    x: 200,
    y: 450,
    rad: 50,
    col: "#c7ed0f",
    wid: 5,
    strokecolor: "#d5f346"
};

var score = {
    x: 800,
    y: 450,
    rad: 100,
    col: "white",
    wid: 5,
    strokecolor: "purple"
};

var result = {
    x: 800,
    y: 450,
    rad: 120,
    col: "white",
    wid: 50,
    strokecolor: "#b00035"
};

var pausebutton = {
    x1: 0,
    y1: 0,
    x2: 450,
    y2: 70
};

window.addEventListener("keyup", function (e) {
    "use strict";
    delete keys[e.keyCode];
    currentpress = 0;
    fsnodoublevalue = false;
}, false);

window.addEventListener("keydown", function (e) {
    "use strict";
    keys[e.keyCode] = true;
}, false);


/*
up - 38
down - 40
left - 37
right 39
space - 32
*/

function regionspeeds() {
    
    if(currentbeat > (part1 + part2 +part3 +part4 + part5 + part6)){
        huered = false;
        huegreen = false;
        bpm = obpm;
        gamecalulation();
        clearInterval(gameplay);
        gameplay = setInterval(function () {
            game();
        }, 1000 / fps);
    } else if(currentbeat > (part1 + part2 +part3 +part4 + part5 - 8)){
        huegreen = true;
    }else if(currentbeat > (part1 + part2 +part3 +part4 + part5)){
        huered = false;
        huegreen = false;
        bpm = obpm * 1.25;
        gamecalulation();
        clearInterval(gameplay);
        gameplay = setInterval(function () {
            game();
        }, 1000 / fps);
    }else if(currentbeat > (part1 + part2 +part3 +part4 + part5)){
        huegreen = true;
    }else if(currentbeat > (part1 + part2 +part3 +part4 )){
        huered = false;
        huegreen = false;
        bpm = obpm;
        gamecalulation();
        clearInterval(gameplay);
        gameplay = setInterval(function () {
            game();
        }, 1000 / fps);
    }else if(currentbeat > (part1 + part2 +part3 +part4 - 8)){
        huegreen = true;
    }else if(currentbeat > (part1 + part2 +part3)){
        huered = false;
        huegreen = false;
        bpm = obpm * 1.25;
        gamecalulation();
        clearInterval(gameplay);
        gameplay = setInterval(function () {
            game();
        }, 1000 / fps);
    }else if(currentbeat > (part1 + part2 +part3 - 8)){
        huered = true;
    }else if(currentbeat > (part1 + part2)){
        huered = false;
        huegreen = false;
        bpm = obpm;
        gamecalulation();
        clearInterval(gameplay);
        gameplay = setInterval(function () {
            game();
        }, 1000 / fps);
        //#b00035
    }else if(currentbeat > (part1 + part2 - 8)){
        huegreen = true;
    }else if(currentbeat > part1){
        huered = false;
        huegreen = false;
        bpm = obpm * 1.25;
        gamecalulation();
        clearInterval(gameplay);
        gameplay = setInterval(function () {
            game();
        }, 1000 / fps);
    }else if(currentbeat > part1 - 8){
        huered = true
    }else {
        huered = false;
        huegreen = false;
        bpm = obpm;
        gamecalulation();
        clearInterval(gameplay);
        gameplay = setInterval(function () {
            game();
        }, 1000 / fps);
    }
}

        
 
function mousedown() {
    "use strict";
    mouseclicked = true;
    var unmouseclicked = setTimeout(function () {
        mouseclicked = false;
        currentpress = 0;
    }, 40);
}

function cords(event) {
    'use strict';
    if (!isleapmotionin) {
        mouserawx = event.clientX;
        mouserawy = event.clientY;
    }
    mousex = (mouserawx - mousextrans) * mousexmod;
    mousey = (mouserawy - mouseytrans) * mouseymod;
}

function noneg() {
    "use strict";
    if (point < 0) {
        point = 0;
    }
}
function ismouseinpause(x1, x2, y1, y2) {
    'use strict';
    if (mousex > x1 && mousex < x2 && mousey > y1 && mousey < y2) {
        pausebuttonover = true;
    } else {
        pausebuttonover = false;
    }
}

function spacebareqv() {
    "use strict";
    
    if (!isleapmotionin) {
        if (startspace < 1) {
            startspace = 2;
        }
        if (currentpress < 1) {
            currentpress = 1;
            if (pressscore > 1) {
                if (pressedyet < 1) {
                    point += 10;
                    pressedyet = 1;
                    goodbad = 2;
                    signal = 1;
                }
            } else if (pressscore > 0) {
                if (pressedyet < 1) {
                    point += 1;
                    pressedyet = 1;
                    goodbad = 1;
                    signal = 1;
                }
            } else {
                currentpress = 1;
                point -= 1;
                goodbad = 0;
                noneg();
                signal = 1;
            }
        }
    }
}

function spiral() {
    "use strict";
    if (count < 40 * framedivide) {
        player.x = player.x - 7.5 / framedivide;
        player.y = player.y - 6.25 / framedivide;
        count += 1;
        pressscore = 0;
        pressedyet = 0;
        justcountedbeat = false;
    } else if (count < 80 * framedivide) {
        player.x = player.x - 7.5 / framedivide;
        player.y = player.y + 6.25 / framedivide;
        count += 1;
        if (!justcountedbeat) {
            justcountedbeat = true;
            currentbeat += 1;
        }
        if (count > 70 * framedivide) {
            pressscore = 2;
            circle(spot.x, spot.y, spot.rad, spot.col, spot.wid, spot.strokecolor);
        } else {
            pressscore = 1;
        }
    } else if (count < 120 * framedivide) {
        player.x = player.x + 7.5 / framedivide;
        player.y = player.y + 6.25 / framedivide;
        count += 1;
        if (count < 90 * framedivide) {
            pressscore = 2;
            circle(spot.x, spot.y, spot.rad, spot.col, spot.wid, spot.strokecolor);
        } else {
            pressscore = 1;
        }
    } else if (count < 160 * framedivide) {
        player.x = player.x + 7.5 / framedivide;
        player.y = player.y - 6.25 / framedivide;
        count += 1;
        pressscore = 0;
        if (count > 150 * framedivide) {
            pressedyet = 0;
        }
    } else if (count < 200 * framedivide) {
        player.x = player.x + 7.5 / framedivide;
        player.y = player.y - 6.25 / framedivide;
        count += 1;
        pressscore = 0;
        justcountedbeat = false;
    } else if (count < 240 * framedivide) {
        player.x = player.x + 7.5 / framedivide;
        player.y = player.y + 6.25 / framedivide;
        count += 1;
        if (!justcountedbeat) {
            justcountedbeat = true;
            currentbeat += 1;
        }
        if (count > 230 * framedivide) {
            pressscore = 2;
            circle(spot.x + 1200, spot.y, spot.rad, spot.col, spot.wid, spot.strokecolor);
        } else {
            pressscore = 1;
        }
    } else if (count < 280 * framedivide) {
        player.x = player.x - 7.5 / framedivide;
        player.y = player.y + 6.25 / framedivide;
        count += 1;
        if (count < 250 * framedivide) {
            pressscore = 2;
            circle(spot.x + 1200, spot.y, spot.rad, spot.col, spot.wid, spot.strokecolor);
        } else {
            pressscore = 1;
        }
    } else if (count < 320 * framedivide) {
        player.x = player.x - 7.5 / framedivide;
        player.y = player.y - 6.25 / framedivide;
        count += 1;
        pressscore = 0;
        if (count > 310 * framedivide) {
            pressedyet = 0;
        }
    } else {
        player.x = 800;
        player.y = 450;
        count = 0;
        pressedyet = 0;
    }


}

function update() {
    "use strict";
    var nowtime = new Date();
    laspedtime = nowtime - starttime;
    
    if (laspedtime > spb * 1000) {
        if (loopside) {
            loopside = false;
            player.x = 800;
            player.y = 450;
            count = 0;
            starttime = new Date();
        } else {
            loopside = true;
            player.x = 800;
            player.y = 450;
            count = 160 * framedivide;
            starttime = new Date();
        }
    }
    if (mouseclicked) {
        spacebareqv(); 
        /*if (!isleapmotionin) {
            spacebareqv(); 
        } else {
            pause();
        }*/
        
    }

    if (keys[32]) {
        spacebareqv();
    }
    
    //miss=point deduct
    if(!isleapmotionin) {
        if (count >= 140 * framedivide && count <= 150 * framedivide) {
            if (pressedyet < 1) {
                pressedyet = 1;
                point -= 2;
                noneg();
                signal = 1;
                goodbad = 0;
            }
        }
        if (count >= 300 * framedivide && count <= 310 * framedivide) {
            if (pressedyet < 1) {
                pressedyet = 1;
                point -= 2;
                noneg();
                signal = 1;
                goodbad = 0;
            }
        }
    }
    /*if (keys[27]) {
        alert(keys[27]);
    }
    HELP, why doesn't this resent after removeing keypress'*/
}
    
function barsinthegame() {
    "use strict";
    //progressbar
    
    context.fillStyle = "#419f00";
    context.fillRect(0, 825, (currentbeat / songfulltimebeats) * cwidth, 50);
    context.fillStyle = "white";
    context.font = "bold 50px helvetica";
    context.fillText("Song Progress", 625, 865);
    //maxscorebar
    context.fillStyle = "#690069";
    var pointbarpercent = (point / ((songfulltimebeats - interludebeatsplusdelay) * 10)) * 700;
    context.strokeStyle = "White";
    context.lineWidth = 5;
    context.strokeRect(1500, 100, 50, 700);
    context.fillRect(1500, 800 - pointbarpercent, 50, pointbarpercent);
    var point50basic = ((songfulltimebeats - interludebeatsplusdelay) / 2);
    var firststarposition = (point50basic / ((songfulltimebeats - interludebeatsplusdelay) * 10)) * 700 - 25;
    if (point > point50basic) {
        star(1525, 800 - firststarposition, 4, "#cfed07", 3, "white");
        firststar = true;
    } else {
        star(1525, 800 - firststarposition, 2, "#5f7300", 3, "#4d004d");
        firststar = false;
    }
    var point100basic = ((songfulltimebeats - interludebeatsplusdelay));
    var secstarposition = (point100basic / ((songfulltimebeats - interludebeatsplusdelay) * 10)) * 700 - 25;
    if (point > point100basic) {
        star(1525, 800 - secstarposition, 4, "#cfed07", 3, "white");
        secstar = true;
    } else {
        star(1525, 800 - secstarposition, 2, "#5f7300", 3, "#4d004d");
        secstar = false;
    }
    var point25perfect = ((songfulltimebeats - interludebeatsplusdelay) * 2.5);
    var thirdstarposition = (point25perfect / ((songfulltimebeats - interludebeatsplusdelay) * 10)) * 700 - 25;
    if (point > point25perfect) {
        star(1525, 800 - thirdstarposition, 4, "#cfed07", 3, "white");
        thirdstar = true;
    } else {
        star(1525, 800 - thirdstarposition, 2, "#5f7300", 3, "#4d004d");
        thirdstar = false;
    }
    var point50perfect = ((songfulltimebeats - interludebeatsplusdelay) * 5);
    var fouthstarposition = (point50perfect / ((songfulltimebeats - interludebeatsplusdelay) * 10)) * 700 - 25;
    if (point > point50perfect) {
        star(1525, 800 - fouthstarposition, 4, "#cfed07", 3, "white");
        fouthstar = true;
    } else {
        star(1525, 800 - fouthstarposition, 2, "#5f7300", 3, "#4d004d");
        fouthstar = false;
    }
    var point75perfect = ((songfulltimebeats - interludebeatsplusdelay) * 7.5);
    var fifthstarposition = (point75perfect / ((songfulltimebeats - interludebeatsplusdelay) * 10)) * 700 - 25;
    if (point > point75perfect) {
        star(1525, 800 - fifthstarposition, 4, "#cfed07", 3, "white");
        fifthstar = true;
    } else {
        star(1525, 800 - fifthstarposition, 2, "#5f7300", 3, "#4d004d");
        fifthstar = false;
    }
}

function signals() {
    "use strict";
    if (currentbeat < (interludebeatsplusdelay + 1)) {
        context.beginPath();
        context.arc(result.x, result.y, result.rad, 0, (2 * currentbeat / interludebeatsplusdelay) * Math.PI, false);
        context.lineWidth = result.wid;
        context.strokeStyle = "#9370DB";
        context.stroke();
        point = 0;
    } else {
        if (signal > 0) {
            if (goodbad > 1) {
                circle(result.x, result.y, result.rad, result.col, result.wid, "#419f00");
            } else if (goodbad > 0) {
                circle(result.x, result.y, result.rad, result.col, result.wid, "#9f0a9f");
            } else {
                circle(result.x, result.y, result.rad, result.col, result.wid, "#b00035");
            }
        }
    }
    signal = 0;
    if (!isfreestyle) {
        barsinthegame();
    }
}

function scoringcenter() {
    "use strict";
    context.fillStyle = "black";
    context.font = "bold 100px helvetica";
    if(isfreestyle){
        if (Math.round(fsbpm) < 10) {
            context.fillText(Math.round(fsbpm), 770, 485);
        }
        else if(Math.round(fsbpm)< 100){
            context.fillText(Math.round(fsbpm), 755, 485);

        }else{
            context.fillText(Math.round(fsbpm), 715, 485);
        }
    }else{
        if (point < 10) {
            context.fillText(point, 770, 485);
        } else if (point < 100) {
            context.fillText(point, 745, 485);
        } else if (point < 1000) {
            context.fillText(point, 715, 485);
        } else if (point < 9001) {
            context.font = "bold 80px helvetica";
            context.fillText(point, 710, 480);
        } else {
            context.font = "bold 60px helvetica";
            context.fillText("OVER", 715, 450);
            context.fillText("9000!", 727.5, 500);
        }
    }
}

function render() {
    "use strict";
    if (startspace < 1) {
        context.fillStyle = "rgba(0, 0, 0, 1)";
        context.fillRect(0, 0, cwidth, cheight);
    }
    //screenrefresh
    if (huered) {
    context.fillStyle = "rgba(255, 0, 0, 0.05)";
    context.fillRect(0, 0, cwidth, cheight);
    context.fillStyle = "rgba(0, 0, 0, 0.1)";
    context.fillRect(0, 0, cwidth, cheight);
    
    } else if (huegreen) {
    context.fillStyle = "rgba(0, 255, 0, 0.05)";
    context.fillRect(0, 0, cwidth, cheight);
    context.fillStyle = "rgba(0, 0, 0, 0.1)";
    context.fillRect(0, 0, cwidth, cheight);
    } else {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, cwidth, cheight);
    }
    
    //screentitle
    context.fillStyle = "white";
    context.font = "bold 75px helvetica";
    context.fillText(songnamestring, titlex, titley + 45);
    context.strokeStyle = "#a32fa3";
    context.strokeText(songnamestring, titlex, titley + 45);
    circle(player.x, player.y, player.rad, player.col, player.wid, player.strokecolor);
    if (startspace > 1) {
        isunpausing = true;
        fsstarttime = new Date();
        setTimeout(function () {
            audio.play();
            isunpausing = false;
        }, songdelayms);
        startspace = 1;
    }
    if (startspace > 0) {
        spiral();
    }
    signals();
    circle(score.x, score.y, score.rad, score.col, score.wid, score.strokecolor);
    scoringcenter();
}

function pausebuttonborderchanger() {
    'use strict';
    ismouseinpause(pausebutton.x1, pausebutton.x2, pausebutton.y1, pausebutton.y2);
        if (pausebuttonover && mouseclicked) {
            pause();
        }
        if (pausebuttonover) {
            document.getElementById("pause").style.borderColor = "white";
        } else {
            document.getElementById("pause").style.borderColor = "purple";
        }
    /*if (!isleapmotionin || gamepause) {
        ismouseinpause(pausebutton.x1, pausebutton.x2, pausebutton.y1, pausebutton.y2);
        if (pausebuttonover && mouseclicked) {
            pause();
        }
        if (pausebuttonover) {
            document.getElementById("pause").style.borderColor = "white";
        } else {
            document.getElementById("pause").style.borderColor = "purple";
        }
    }*/
}
function game() {
    "use strict";
    regionspeeds();
    if (isfreestyle) {
        currentbeat = 0;
        interludebeatsplusdelay = 0;
    }
    if (bullseyecript) {
        //settling of elements
        document.getElementById("pause").style.display = "block";
        document.getElementById("purplehand").style.display = "none";
        document.getElementById("mainmenunormal").style.display = "none";
        document.getElementById("returntomain").style.display = "none";
        document.getElementById("pause").innerHTML = "Pause Game";
        if (!resumed) {
            resumed = true;
            return;
        }
        update();
        render();
            
        if (huered) {
            context.fillStyle = "green";
            context.font = "bold 100px helvetica";
            context.fillText("SPEED UP", 550, 500);
        } else if (huegreen) {
            context.fillStyle = "red";
        context.font = "bold 100px helvetica";
        context.fillText("Normal Speed", 475, 500);
        }
                
        
        if ((songfulltimebeats + 1) < currentbeat) {
            clearInterval(gameplay);
            clearInterval(pausebuttonchecker);
            bullseyecript = false;
            endscreenscript = true;
            audio.pause();
            audio.currentTime = 0;
            context.fillStyle = "rgba(0, 0, 0, 1)";
            context.fillRect(0, 0, cwidth, cheight);
            circle(score.x, score.y, score.rad, score.col, score.wid, score.strokecolor);
            
            if (!isfreestyle) {
            scoringcenter();
            barsinthegame();
            }
            //screentitle
            context.fillStyle = "white";
            context.font = "bold 75px helvetica";
            context.fillText(songnamestring, titlex, titley);
            context.strokeStyle = "#a32fa3";
            context.strokeText(songnamestring, titlex, titley);
            setTimeout(function () {
                mainmenu = setInterval(function () {
                    mainmenucode();
                }, 1000 / 60);
            victorydisplay();
            }, 500);
        }
    }
}

var gameplay = setInterval(function () {
    'use strict';
    game();
}, 1000 / fps);
clearInterval(gameplay);

var pausebuttonchecker = setInterval(function () {
    'use strict';
    pausebuttonborderchanger();
}, 50);
clearInterval(pausebuttonchecker);


function pause() {
    'use strict';
    mouseclicked = false;
    if (startspace < 2 && startspace > 0 && !isunpausing) {
        gamepause = !gamepause;
        if (gamepause) {
            clearInterval(gameplay);
            clearInterval(bullseyefs);
            mainmenu = setInterval(function () {
                mainmenucode();
            }, 1000 / 60);
            document.getElementById("pause").innerHTML = "Resume Game!";
            document.getElementById("purplehand").style.display = "block";
            document.getElementById("returntomain").style.display = "block";
            endscreenscript = true;
            resumed = false;
            audio.pause();
            context.fillStyle = "rgba(69, 69, 69, 0.75)";
            context.fillRect(0, 0, cwidth, cheight);
            context.fillStyle = "rgba(176, 0, 53, 1)";
            context.font = "bold 200px helvetica";
            context.fillText("PAUSED!", 375, 525);
            setTimeout(function(){
                context.fillStyle = "rgba(69, 69, 69, 0.75)";
                context.fillRect(0, 0, cwidth, cheight);
                context.fillStyle = "rgba(176, 0, 53, 1)";
                context.font = "bold 200px helvetica";
                context.fillText("PAUSED!", 375, 525);
            }, 100)
        } else {
            isunpausing = true;
            document.getElementById("purplehand").style.display = "none";
            clearInterval(mainmenu);
            document.getElementById("pause").innerHTML = "Resuming...";
            document.getElementById("pause").style.borderColor = "purple";
            context.fillStyle = "rgba(176, 0, 53, 1)";
            context.font = "bold 200px helvetica";
            setTimeout(function () {
                context.fillText("3", 450, 250);
            }, 500);
            setTimeout(function () {
                context.fillText("2", 750, 250);
            }, 1000);
            setTimeout(function () {
                context.fillText("1", 1050, 250);
            }, 1500);
            setTimeout(function () {
                isunpausing = false;
                document.getElementById("pause").innerHTML = "Pause Game";
                context.fillStyle = "rgba(0, 0, 0, 1)";
                context.fillRect(0, 0, cwidth, cheight);
                audio.play();
                bullseyefs = setInterval(function() {
                    freestyleloop();
                }, 1000 /60);
                gameplay = setInterval(function () {
                    game();
                }, 1000 / fps);
            }, 2000);
        }
    }
}

//END OF MAIN GAME//


/*$(document).ready(function () {
    "use strict";
   
});*/
