/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global Audio: false */
/*global console: false */
var canvas = document.getElementById("maincanvas");
var context = canvas.getContext("2d");
var cwidth = 1600;
var cheight = 900;

//START OF MAIN GAME
//var
var interval = null;
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
var music = "bullseye88.mp3";
var audio = new Audio(music);
var startspace = 0;
var wholesonglaspedtime = 0;
var startsongtime = new Date();
var songfulltime = 240;
var laspedtime = 0;
var centerbutton = false;
var mousex = 0;
var mousey = 0;
var starttime = new Date();
var pausebuttonover = false;
var isunpausing = true;
var mouseclicked = false;

//calcuations
if (bpm < 60) {
    var framelimit = 120;
} else if (bpm < 120) {
    var framelimit = 80;
} else if (bpm < 240) {
    var framelimit = 60;
} else {
    var framelimit = 40;
}
var framedivide = framelimit / 160,
    bps = bpm / 60,
    spb = 60 / bpm,
    fps = bps * framelimit;


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


var keys = [];

var player = {
    x: 800,
    y: 450,
    rad: 20,
    col: "purple",
    wid: 0,
    strokecolor: "purple"
};

var spot = {
    x: 200,
    y: 450,
    rad: 50,
    col: "yellow",
    wid: 5,
    strokecolor: "white"
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
    strokecolor: "red"
};

var pausebutton = {
    x1: 0,
    y1: 0,
    x2: 150,
    y2: 30
};

window.addEventListener("keyup", function (e) {
    "use strict";
    delete keys[e.keyCode];
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
function mousedown() {
    "use strict";
    mouseclicked = !mouseclicked;
}

function cords(event) {
    'use strict';
    mousex = event.clientX;
    mousey = event.clientY;
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
var count = 0;

function spacebareqv() {
    "use strict";
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
    } else {
        currentpress = 0;
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
    } else if (count < 80 * framedivide) {
        player.x = player.x - 7.5 / framedivide;
        player.y = player.y + 6.25 / framedivide;
        count += 1;
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
    } else if (count < 240 * framedivide) {
        player.x = player.x + 7.5 / framedivide;
        player.y = player.y + 6.25 / framedivide;
        count += 1;
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
    
    wholesonglaspedtime = nowtime - startsongtime;
    if (songfulltime < wholesonglaspedtime) {
        console.log();
    }
    
    if (keys[32]) {
        spacebareqv();
    }
    
    //miss=point deduct
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
    
    /*if (keys[27]) {
        alert(keys[27]);
    }
    HELP, why doesn't this resent after removeing keypress'*/
}
    

function signals() {
    "use strict";
    if (signal > 0) {
        if (goodbad > 1) {
            circle(result.x, result.y, result.rad, result.col, result.wid, "green");
        } else if (goodbad > 0) {
            circle(result.x, result.y, result.rad, result.col, result.wid, "blue");
        } else {
            circle(result.x, result.y, result.rad, result.col, result.wid, "red");
        }
    }
    signal = 0;
    if (pausebuttonover) {
        document.getElementById("pause").style.borderColor = "pink";
    } else {
        document.getElementById("pause").style.borderColor = "darkmagenta";
    }
}

function scoringcenter() {
    "use strict";
    context.fillStyle = "black";
    context.font = "bold 100px helvetica";
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

function render() {
    "use strict";
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, cwidth, cheight);
    context.fillStyle = "rgba(255, 0, 0, 1)";
    circle(player.x, player.y, player.rad, player.col, player.wid, player.strokecolor);
    if (startspace > 1) {
        audio.play();
        startspace = 1;
        isunpausing = false;
        var temptimecounter = starttime;
    }
    if (startspace > 0) {
        spiral();
    }
    signals();
    circle(score.x, score.y, score.rad, score.col, score.wid, score.strokecolor);
    scoringcenter();
}


function game() {
    "use strict";

    if (!resumed) {
        resumed = true;
        return;
    }
    update();
    render();
}

var gameplay = setInterval(function () {
    'use strict';
    game();
}, 1000 / fps);

function pause() {
    'use strict';
    mouseclicked = false;
    if (startspace < 2 && startspace > 0 && !isunpausing) {
        gamepause = !gamepause;
        if (gamepause) {
            resumed = false;
            audio.pause();
            context.fillStyle = "rgba(69, 69, 69, 0.75)";
            context.fillRect(0, 0, cwidth, cheight);
            context.fillStyle = "rgba(255, 0, 0, 1)";
            context.font = "bold 200px helvetica";
            context.fillText("PAUSED!", 375, 525);
            clearInterval(gameplay);
        } else {
            isunpausing = true;
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
                context.fillStyle = "rgba(0, 0, 0, 1)";
                context.fillRect(0, 0, cwidth, cheight);
                audio.play();
                gameplay = setInterval(function () {
                    game();
                }, 1000 / fps);
            }, 2000);
        }
    }
}
setInterval(function () {
    'use strict';
    ismouseinpause(pausebutton.x1, pausebutton.x2, pausebutton.y1, pausebutton.y2);
    if (pausebuttonover && mouseclicked) {
        pause();
    }
});
//END OF MAIN GAME//


/*$(document).ready(function () {
    "use strict";
   
});*/