/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global Audio: false */
/*global console: false */

//globalvariables
var canvas = document.getElementById("maincanvas");
var context = canvas.getContext("2d");
var cwidth = 1600;
var cheight = 900;


//currentvariables
var isgrabbing = false;
var clickeffectplaybefore = false;
var grabmotioncalculating = false;
var grabmotionset = false;
var grabmotionori = 0;
var grabmotionmove = 0;
var totalsongsno = 6;
var totherightof135 = totalsongsno - 2;
var oajustvalue = totalsongsno * 405;
var isfreestyle = false;

function convertmousepostocanvas(mousepos, isx) {
    "use strict";
    if (isx) {
        return ((mousepos / 1365) * 1600);
    } else {
        return ((mousepos / 661) * 900);
    }
}

function grabbing() {
    'use strict';
    isgrabbing = true;
}

function ungrabbing() {
    'use strict';
    isgrabbing = false;
    fsnodoublevalue = false;
}
    
var normalgamemode = {
    x1: 340,
    y1: 260,
    x2: 1065,
    y2: 340
};
var freestylelocation = {
    x1: 340,
    y1: 383.5,
    x2: 1065,
    y2: 463.5
};
var highscorelocation = {
    x1: 340,
    y1: 507,
    x2: 1065,
    y2: 587
};
var endscreenreturntomain = {
    x1: 80,
    y1: 530,
    x2: 1275,
    y2: 600
};
var calibratebuttonlocation = {
    x1: 0,
    y1: 610,
    x2: 1365,
    y2: 651
};
var songart0location = {
    ox1: -290,
    ox2: 11,
    x1: -290,
    y1: 100,
    x2: 11,
    y2: 355,
    left: -20,
    oleft: -20
};
var songart1location = {
    x1: 135,
    y1: 100,
    ox1: 135,
    ox2: 436,
    x2: 436,
    y2: 355,
    left: 10,
    oleft: 10
};
var songart2location = {
    x1: 560,
    y1: 100,
    ox1: 560,
    ox2: 861,
    x2: 861,
    y2: 355,
    left: 40,
    oleft: 40
};
var songart3location = {
    x1: 985,
    y1: 100,
    ox1: 985,
    ox2: 1286,
    x2: 1286,
    y2: 355,
    left: 70,
    oleft: 70
};
var songart4location = {
    x1: 1410,
    y1: 100,
    ox1: 1410,
    ox2: 1711,
    x2: 1711,
    y2: 355,
    left: 100,
    oleft: 100
};
var songart5location = {
    x1: 1835,
    y1: 100,
    ox1: 1835,
    ox2: 2136,
    x2: 2136,
    y2: 355,
    left: 130,
    oleft: 130
};

 
    
function tolunchfs() {
    "use strict";
    bullseyefsscript = true;
    
    bullseyefs = setInterval(function () {
        freestyleloop();
    }, 1000/60);
	audio = new Audio(aud10);
	tolunchgame();
}

function tolunchgame() {
    "use strict";
    huegreen = false;
    huered = false;
    bullseyecript = true;
    player.col = "#800080";
    player.strokecolor = "#800080";
    player.rad = "20";
    spot.rad = "50";
    document.getElementById("returntomain").style.display = "none";
    document.getElementById("art0").style.display = "none";
    document.getElementById("art1").style.display = "none";
    document.getElementById("art2").style.display = "none";
    document.getElementById("art3").style.display = "none";
    document.getElementById("art4").style.display = "none";
    document.getElementById("art5").style.display = "none";
    normalgamemodescript = false;
    mainmenuscript = false;
    clearInterval(mainmenu);
    context.fillStyle = "rgba(0, 0, 0, 1)";
    context.fillRect(0, 0, cwidth, cheight);
    gameplay = setInterval(function () {
        game();
    }, 1000 / fps);

    pausebuttonchecker = setInterval(function () {
        pausebuttonborderchanger();
    }, 50);
}

function mainmenucode() {
    "use strict";
    //handactions
    var handx = (mousex / 13.65) - 3,
        handy = (mousey / 6.61) - 10;
    var clickfx = new Audio("clickfx.mp3");
    if (isgrabbing) {
        document.getElementById("purplehand").src = "purplegrabright.png";
        if (!clickeffectplaybefore) {
            clickeffectplaybefore = true;
            clickfx.play();
        }
    } else {
        clickeffectplaybefore = false;
        document.getElementById("purplehand").src = "purplenormright.png";
    }
    document.getElementById("purplehand").style.left = handx + "%";
    document.getElementById("purplehand").style.top = handy + "%";
    
    if (normalgamemode || highscorescript) {
        grabmotioncalculating = true;
    } else {
        grabmotioncalculating = false;
    }
    
    if (mainmenuscript) {
        
        //settling of elements
        document.getElementById("pause").style.display = "none";
        document.getElementById("purplehand").style.display = "block";
        document.getElementById("mainmenunormal").style.display = "block";
        document.getElementById("returntomain").style.display = "none";
        document.getElementById("art1").style.display = "none";
        document.getElementById("art2").style.display = "none";
        document.getElementById("art3").style.display = "none";
        document.getElementById("art0").style.display = "none";
        document.getElementById("art4").style.display = "none";
        document.getElementById("art5").style.display = "none";
        
        //background
        context.fillStyle = "rgba(50, 0, 50, 1)";
        context.fillRect(0, 0, cwidth, cheight);
        
        //lmao
        context.font = "bold 400px helvetica";
        context.fillStyle = "rgba(163 , 47, 163, 1)";
        context.lineWidth = 20;
        context.strokeStyle = "rgba(255, 255, 255, 1)";
        var textwords = "LMAO!",
            textx = 150,
            texty = 300;
        context.strokeText(textwords, textx, texty);
        context.fillText(textwords, textx, texty);
        
        //is mouse in normalgamemode
        if (mousex > normalgamemode.x1 && mousex < normalgamemode.x2 && mousey > normalgamemode.y1 && mousey < normalgamemode.y2) {
            document.getElementById("mainmenunormal").style.borderColor = "white";
            if (mouseclicked) {
                mouseclicked = false;
                isfreestyle = false;
                mainmenuscript = false;
                normalgamemodescript = true;
                highscorescript = false;
            }
        } else {
            document.getElementById("mainmenunormal").style.borderColor = "purple";
        }
        
    
        //is mouse in freestyle
        if (mousex > freestylelocation.x1 && mousex < freestylelocation.x2 && mousey > freestylelocation.y1 && mousey < freestylelocation.y2) {
            context.fillStyle = "purple";
            context.strokeStyle = "rgba(255, 255, 255, 1)";
            context.fillRect(convertmousepostocanvas(freestylelocation.x1, true), convertmousepostocanvas(freestylelocation.y1, false), (convertmousepostocanvas((freestylelocation.x2 - freestylelocation.x1), true)), convertmousepostocanvas((freestylelocation.y2 - freestylelocation.y1), false));
            context.strokeRect(convertmousepostocanvas(freestylelocation.x1, true), convertmousepostocanvas(freestylelocation.y1, false), (convertmousepostocanvas((freestylelocation.x2 - freestylelocation.x1), true)), convertmousepostocanvas((freestylelocation.y2 - freestylelocation.y1), false));
            if (mouseclicked) {
                mouseclicked = false;
                isfreestyle = true;
                mainmenuscript = false;
                normalgamemodescript = true;
                highscorescript = false;
            }
        } else {
            context.fillStyle = "purple";
            context.fillRect(convertmousepostocanvas(freestylelocation.x1, true), convertmousepostocanvas(freestylelocation.y1, false), (convertmousepostocanvas((freestylelocation.x2 - freestylelocation.x1), true)), convertmousepostocanvas((freestylelocation.y2 - freestylelocation.y1), false));
        }
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 60px helvetica";
        context.fillText("Freestyle", 670, 595);
        
        //is mouse in highscore
        if (mousex > highscorelocation.x1 && mousex < highscorelocation.x2 && mousey > highscorelocation.y1 && mousey < highscorelocation.y2) {
            context.fillStyle = "purple";
            context.strokeStyle = "rgba(255, 255, 255, 1)";
            context.fillRect(convertmousepostocanvas(highscorelocation.x1, true), convertmousepostocanvas(highscorelocation.y1, false), (convertmousepostocanvas((highscorelocation.x2 - highscorelocation.x1), true)), convertmousepostocanvas((highscorelocation.y2 - highscorelocation.y1), false));
            context.strokeRect(convertmousepostocanvas(highscorelocation.x1, true), convertmousepostocanvas(highscorelocation.y1, false), (convertmousepostocanvas((highscorelocation.x2 - highscorelocation.x1), true)), convertmousepostocanvas((highscorelocation.y2 - highscorelocation.y1), false));
            if (mouseclicked) {
                mouseclicked = false;
                highscorescript = true;
                mainmenuscript = false;
                
            }
        } else {
            context.fillStyle = "purple";
            context.fillRect(convertmousepostocanvas(highscorelocation.x1, true), convertmousepostocanvas(highscorelocation.y1, false), (convertmousepostocanvas((highscorelocation.x2 - highscorelocation.x1), true)), convertmousepostocanvas((highscorelocation.y2 - highscorelocation.y1), false));
        }
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 60px helvetica";
        context.fillText("Highscore!", 670, 765);
        
        //is mouse in recalibrate
        if (mousex > calibratebuttonlocation.x1 && mousex < calibratebuttonlocation.x2 && mousey > calibratebuttonlocation.y1 && mousey < calibratebuttonlocation.y2) {
            context.fillStyle = "purple";
            context.strokeStyle = "rgba(255, 255, 255, 1)";
            context.fillRect(convertmousepostocanvas(calibratebuttonlocation.x1, true), convertmousepostocanvas(calibratebuttonlocation.y1, false), (convertmousepostocanvas((calibratebuttonlocation.x2 - calibratebuttonlocation.x1), true)), convertmousepostocanvas((calibratebuttonlocation.y2 - calibratebuttonlocation.y1), false));
            context.strokeRect(convertmousepostocanvas(calibratebuttonlocation.x1, true), convertmousepostocanvas(calibratebuttonlocation.y1, false), (convertmousepostocanvas((calibratebuttonlocation.x2 - calibratebuttonlocation.x1), true)), convertmousepostocanvas((calibratebuttonlocation.y2 - calibratebuttonlocation.y1), false));
            if (mouseclicked) {
                mouseclicked = false;
                localStorage.removeItem('x1');
                localStorage.removeItem('x2');
                localStorage.removeItem('y1');
                localStorage.removeItem('y2');
                location.reload();
            }
        } else {
            context.fillStyle = "purple";
            context.fillRect(convertmousepostocanvas(calibratebuttonlocation.x1, true), convertmousepostocanvas(calibratebuttonlocation.y1, false), (convertmousepostocanvas((calibratebuttonlocation.x2 - calibratebuttonlocation.x1), true)), convertmousepostocanvas((calibratebuttonlocation.y2 - calibratebuttonlocation.y1), false));
        }
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 35px helvetica";
        context.fillText("Recalibrate", 700, 870);
    }
    
    if (grabmotioncalculating) {
        //calculation for grabmotion
        if (isgrabbing) {
            if (grabmotionset) {
                grabmotionori = mousex;
                grabmotionset = false;
            } else {
                grabmotionset = true;
                var grabdifference = mousex - grabmotionori;
                if (!grabmotionori < 1) {
                    grabmotionmove += grabdifference;
                }
            } 
        } else {
            grabmotionset = true;
        }
        
        if (songart0location.x1 < -290 - 200) {
            songart0location.ox1 += oajustvalue;
            songart0location.oleft += (oajustvalue / 13.5);
            songart0location.ox2 += oajustvalue;
        } else if (songart0location.x1 > (totherightof135 * 425) + 235) {
            songart0location.ox1 -= oajustvalue;
            songart0location.oleft -= (oajustvalue / 13.5);
            songart0location.ox2 -= oajustvalue;
        }
        if (songart1location.x1 < -290 - 200) {
            songart1location.ox1 += oajustvalue;
            songart1location.oleft += (oajustvalue / 13.5);
            songart1location.ox2 += oajustvalue;
        } else if (songart1location.x1 > (totherightof135 * 425) + 235) {
            songart1location.ox1 -= oajustvalue;
            songart1location.oleft -= (oajustvalue / 13.5);
            songart1location.ox2 -= oajustvalue;
        }
        if (songart2location.x1 < -290 - 200) {
            songart2location.ox1 += oajustvalue;
            songart2location.oleft += (oajustvalue / 13.5);
            songart2location.ox2 += oajustvalue;
        } else if (songart2location.x1 > (totherightof135 * 425) + 235) {
            songart2location.ox1 -= oajustvalue;
            songart2location.oleft -= (oajustvalue / 13.5);
            songart2location.ox2 -= oajustvalue;
        }
        if (songart3location.x1 < -290 - 200) {
            songart3location.ox1 += oajustvalue;
            songart3location.oleft += (oajustvalue / 13.5);
            songart3location.ox2 += oajustvalue;
        } else if (songart3location.x1 > (totherightof135 * 425) + 235) {
            songart3location.ox1 -= oajustvalue;
            songart3location.oleft -= (oajustvalue / 13.5);
            songart3location.ox2 -= oajustvalue;
        }
        if (songart4location.x1 < -290 - 200) {
            songart4location.ox1 += oajustvalue;
            songart4location.oleft += (oajustvalue / 13.5);
            songart4location.ox2 += oajustvalue;
        } else if (songart4location.x1 > (totherightof135 * 425) + 235) {
            songart4location.ox1 -= oajustvalue;
            songart4location.oleft -= (oajustvalue / 13.5);
            songart4location.ox2 -= oajustvalue;
        }
        if (songart5location.x1 < -290 - 200) {
            songart5location.ox1 += oajustvalue;
            songart5location.oleft += (oajustvalue / 13.5);
            songart5location.ox2 += oajustvalue;
        } else if (songart5location.x1 > (totherightof135 * 425) + 235) {
            songart5location.ox1 -= oajustvalue;
            songart5location.oleft -= (oajustvalue / 13.5);
            songart5location.ox2 -= oajustvalue;
        }
        songart0location.x1 = songart0location.ox1 + grabmotionmove;
        songart0location.x2 = songart0location.ox2 + grabmotionmove;
        songart0location.left = songart0location.oleft + (grabmotionmove/13.5);
        
        
        songart1location.x1 = songart1location.ox1 + grabmotionmove;
        songart1location.x2 = songart1location.ox2 + grabmotionmove;
        songart1location.left = songart1location.oleft + (grabmotionmove/13.5);
        
        songart2location.x1 = songart2location.ox1 + grabmotionmove;
        songart2location.x2 = songart2location.ox2 + grabmotionmove;
        songart2location.left = songart2location.oleft + (grabmotionmove/13.5);
        
        songart3location.x1 = songart3location.ox1 + grabmotionmove;
        songart3location.x2 = songart3location.ox2 + grabmotionmove;
        songart3location.left = songart3location.oleft + (grabmotionmove/13.5);
        
        songart4location.x1 = songart4location.ox1 + grabmotionmove;
        songart4location.x2 = songart4location.ox2 + grabmotionmove;
        songart4location.left = songart4location.oleft + (grabmotionmove/13.5);
        
        songart5location.x1 = songart5location.ox1 + grabmotionmove;
        songart5location.x2 = songart5location.ox2 + grabmotionmove;
        songart5location.left = songart5location.oleft + (grabmotionmove/13.5);
    }
    
    if (normalgamemodescript) {
        endscreenscript = true;
        document.getElementById("mainmenunormal").style.display = "none";
        document.getElementById("returntomain").style.display = "block";
        
        document.getElementById("art0").style.display = "block";
        document.getElementById("art1").style.display = "block";
        document.getElementById("art2").style.display = "block";
        document.getElementById("art3").style.display = "block";
        document.getElementById("art4").style.display = "block";
        document.getElementById("art5").style.display = "block";
        
        
        //background
        context.fillStyle = "rgba(50, 0, 50, 1)";
        context.fillRect(0, 0, cwidth, cheight);
        
        //lightsbox0
        if (mousex > songart0location.x1 && mousex < songart0location.x2 && mousey > songart0location.y1 && mousey < songart0location.y2) {
            document.getElementById("art0").style.borderWidth = "10px";
            document.getElementById("art0").style.left = (songart0location.left - 0.75).toString() + "%";
            document.getElementById("art0").style.top = "13.5%";
            document.getElementById("art0").src = "0/z0.jpg";
            if (mouseclicked) {
                mouseclicked = false;
                if (isfreestyle) {
                    oohahhvarset();
                    fsoohahhvarset();
                    
                    tolunchfs();
                } else {
                   oohahhvarset();
                    tolunchgame(); 
                }
                
            }
        } else {
            document.getElementById("art0").style.borderWidth = "0px";
            document.getElementById("art0").style.left = (songart0location.left).toString() + "%";
            document.getElementById("art0").style.top = "15%";
            document.getElementById("art0").src = "0/0.jpg";
        }
        //lightsbox1
        if (mousex > songart1location.x1 && mousex < songart1location.x2 && mousey > songart1location.y1 && mousey < songart1location.y2) {
            document.getElementById("art1").style.borderWidth = "10px";
            document.getElementById("art1").style.left = (songart1location.left - 0.75).toString() + "%";
            document.getElementById("art1").style.top = "13.5%";
            document.getElementById("art1").src = "1/z1.png";
            if (mouseclicked) {
                mouseclicked = false;
                if (isfreestyle) {
                    //ori game var set has to set first
                    bulleyesvarset();
                    fsbullseyesvarset();
                    
                    tolunchfs();
                } else {
                    bulleyesvarset();
                    tolunchgame();
                }
            }
        } else {
            document.getElementById("art1").style.borderWidth = "0px";
            document.getElementById("art1").style.left = (songart1location.left).toString() + "%";
            document.getElementById("art1").style.top = "15%";
            document.getElementById("art1").src = "1/1.png";
        }
        //lightbox2
        if (mousex > songart2location.x1 && mousex < songart2location.x2 && mousey > songart2location.y1 && mousey < songart2location.y2) {
            document.getElementById("art2").style.borderWidth = "10px";
            document.getElementById("art2").style.left = (songart2location.left - 0.75).toString() + "%";
            document.getElementById("art2").style.top = "13.5%";
            document.getElementById("art2").src = "2/z2.jpg";
            if (mouseclicked) {
                mouseclicked = false;
                if (isfreestyle) {
                    boombayahvarset();
                    fsboombayahvarset();
                    
                    tolunchfs();
                } else {
                    boombayahvarset();
                    tolunchgame();
                }
            }
        } else {
            document.getElementById("art2").style.borderWidth = "0px";
            document.getElementById("art2").style.left = (songart2location.left).toString() + "%";
            document.getElementById("art2").style.top = "15%";
            document.getElementById("art2").src = "2/2.jpg";
        }
        
        //lightbox3
        if (mousex > songart3location.x1 && mousex < songart3location.x2 && mousey > songart3location.y1 && mousey < songart3location.y2) {
            document.getElementById("art3").style.borderWidth = "10px";
            document.getElementById("art3").style.left = (songart3location.left - 0.75).toString() + "%";
            document.getElementById("art3").style.top = "13.5%";
            document.getElementById("art3").src = "3/z3.jpg";
            if (mouseclicked) {
                mouseclicked = false;
                if (isfreestyle) {
                    TTvarset();
                    fsTTvarset()
                    
                    tolunchfs();
                } else {
                    TTvarset();
                    tolunchgame();
                }
            }
        } else {
            document.getElementById("art3").style.borderWidth = "0px";
            document.getElementById("art3").style.left = (songart3location.left).toString() + "%";
            document.getElementById("art3").style.top = "15%";
            document.getElementById("art3").src = "3/3.jpg";
        }
        //lightbox4
        if (mousex > songart4location.x1 && mousex < songart4location.x2 && mousey > songart4location.y1 && mousey < songart4location.y2) {
            document.getElementById("art4").style.borderWidth = "10px";
            document.getElementById("art4").style.left = (songart4location.left - 0.75).toString() + "%";
            document.getElementById("art4").style.top = "13.5%";
            document.getElementById("art4").src = "4/z4.png";
            if (mouseclicked) {
                mouseclicked = false;
                if (isfreestyle) {
                    whistlevarset();
                    fswhistlevarset()
                    
                    tolunchfs();
                } else {
                    whistlevarset();
                    tolunchgame();
                }
            }
        } else {
            document.getElementById("art4").style.borderWidth = "0px";
            document.getElementById("art4").style.left = (songart4location.left).toString() + "%";
            document.getElementById("art4").style.top = "15%";
            document.getElementById("art4").src = "4/4.png";
        }
        //lightbox5
        if (mousex > songart5location.x1 && mousex < songart5location.x2 && mousey > songart5location.y1 && mousey < songart5location.y2) {
            document.getElementById("art5").style.borderWidth = "10px";
            document.getElementById("art5").style.left = (songart5location.left - 0.75).toString() + "%";
            document.getElementById("art5").style.top = "13.5%";
            document.getElementById("art5").src = "5/z5.jpg";
            if (mouseclicked) {
                mouseclicked = false;
                if (isfreestyle) {
                    hellovarset();
                    fshellovarset()
                    
                    tolunchfs();
                } else {
                    hellovarset();
                    tolunchgame();
                }
            }
        } else {
            document.getElementById("art5").style.borderWidth = "0px";
            document.getElementById("art5").style.left = (songart5location.left).toString() + "%";
            document.getElementById("art5").style.top = "15%";
            document.getElementById("art5").src = "5/5.jpg";
        }
        //song titles 0 
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 50px helvetica";
        context.fillText("Ooh Ahh", convertmousepostocanvas(songart0location.x1, true) + 50, 550);
        context.font = "bold 35px helvetica";
        context.fillText("Twice", convertmousepostocanvas(songart0location.x1, true)+50, 600);
        
        //song titles 1 
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 50px helvetica";
        context.fillText("Bulleyes", convertmousepostocanvas(songart1location.x1, true), 550);
        context.font = "bold 35px helvetica";
        context.fillText("Carly Rae Jepsen", convertmousepostocanvas(songart1location.x1, true), 600);
        
        //song titles 2
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 50px helvetica";
        context.fillText("Boombayah", convertmousepostocanvas(songart2location.x1, true), 550);
        context.font = "bold 35px helvetica";
        context.fillText("BlackPink", convertmousepostocanvas(songart2location.x1, true), 600);
        
        //song titles 3
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 50px helvetica";
        context.fillText("TT", convertmousepostocanvas(songart3location.x1, true), 550);
        context.font = "bold 35px helvetica";
        context.fillText("Twice", convertmousepostocanvas(songart3location.x1, true), 600);
        //song titles 4
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 50px helvetica";
        context.fillText("Whistle", convertmousepostocanvas(songart4location.x1, true), 550);
        context.font = "bold 35px helvetica";
        context.fillText("BlackPink", convertmousepostocanvas(songart4location.x1, true), 600);
        //song titles 5
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 50px helvetica";
        context.fillText("Hello", convertmousepostocanvas(songart5location.x1, true), 550);
        context.font = "bold 35px helvetica";
        context.fillText("Adele", convertmousepostocanvas(songart5location.x1, true), 600);
    }
    if (endscreenscript) {
        if (mousex > endscreenreturntomain.x1 && mousex < endscreenreturntomain.x2 && mousey > endscreenreturntomain.y1 && mousey < endscreenreturntomain.y2) {
            document.getElementById("returntomain").style.borderColor = "white";
            if (mouseclicked) {
                mouseclicked = false;
                audio.currentTime = 0;
                normalgamemodescript = false;
                mainmenuscript = true;
                endscreenscript = false;
                highscorescript = false;
            }
        } else {
            document.getElementById("returntomain").style.borderColor = "purple";
        }
    }
    highscore();
}
var mainmenu = setInterval(function () {
    'use strict';
    mainmenucode();
}, 1000 / 60);
