var leapmotiongrab = 0;
var isleapmotionin = false;
var righthand = false;

Leap.loop(function (frame) {


  // Display Hand object data
    if (frame.hands.length > 0) {
        isleapmotionin = true;
        var hand = frame.hands[0];
        hand.pinchStrength;
        cords();
        if (hand.type == "right") {
            righthand = true;
            mouserawx = hand.palmPosition[0] + 500;
            mouserawy = hand.palmPosition[1];
            leapmotiongrab = hand.grabStrength;
        } else {
            righhand = false;
            leapmotiongrab = 0;
        }
    }
});

setInterval(function() {
    if (isleapmotionin) {
        if (leapmotiongrab > 0.99) {
            if (!isgrabbing) {
                mousedown();
                if (startspace < 1) {
                    startspace = 2;
                }
            }
            isgrabbing = true;
        } else {
            isgrabbing = false;
        }
    }
}, 1000 / 60);

/* failed trial
var recentlyleapdxdy = false;
setInterval(function() {
    var prevrawx = mouserawx;
    var prevrawy = mouserawy;
    setTimeout(function() {
        if ((Math.abs(mouserawx - prevrawx)) < 0.5 * (Math.abs(mouserawy - prevrawy))) {
            if (!recentlyleapdxdy) {
                console.log("true");
                spacebareqv();
            }
            recentlyleapdxdy = true;
        } else {
            console.log("False");
            var leaprecentlytimeout = setTimeout(function() {
                recentlyleapdxdy = false;
                currentpress = 0;
            }, 100 / fps)
        }
    }, 500 / fps)
}, 1000 / fps);*/
var ref1 = 0;
var ref2 = 0;
var ref3 = 0;
var ref4 = 0;
var ref5 = 0;
var leapdelay = 20;
var leappointgiven = false;
function leappointsystem() {
    if (isleapmotionin) {
        if ((count > ((35 + leapdelay) * framedivide)) && (count < ((45 + leapdelay) * framedivide))) {
            ref1 = mousex;
        } else if ((count > ((65 + leapdelay) * framedivide)) && (count < ((75 + leapdelay) * framedivide))) {
            ref2 = mousex;
        } else if ((count > ((75 + leapdelay) * framedivide)) && (count < ((85 + leapdelay) * framedivide))) {
            ref3 = mousex;
        } else if ((count > ((85 + leapdelay) * framedivide)) && ((count + leapdelay) < (95 * framedivide))) {
            ref4 = mousex;
        } else if ((count > ((115 + leapdelay) * framedivide)) && (count < ((125 + leapdelay) * framedivide))) {
            ref5 = mousex;
            leappointgiven = false;
        } else if ((count > ((155 + leapdelay) * framedivide)) && (count < ((165 + leapdelay) * framedivide))) {
            if ((ref2 > ref3) && (ref3 < ref4)) {
                if (!leappointgiven) {
                point += 10;
                goodbad = 2;
                signal = 1;
                leappointgiven = true;
                }
            } else if ((ref1 > ref3) && (ref3 < ref5)) {
                if (!leappointgiven) {
                point += 1;
                goodbad = 1;
                signal = 1;
                leappointgiven = true;
                }
            } else {
                if (!leappointgiven) {
                point -= 2;
                goodbad = 0;
                noneg();
                signal = 1;
                    leappointgiven = true;
                }
            }
        } else if ((count > ((195 + leapdelay) * framedivide)) && (count < ((205 + leapdelay) * framedivide))) {
            ref1 = mousex;
        } else if ((count > ((225 + leapdelay) * framedivide)) && (count < ((235 + leapdelay) * framedivide))) {
            ref2 = mousex;
        } else if ((count > ((235 + leapdelay) * framedivide)) && (count < ((245 + leapdelay) * framedivide))) {
            ref3 = mousex;
        } else if ((count > ((245 + leapdelay) * framedivide)) && (count < ((255 + leapdelay) * framedivide))) {
            ref4 = mousex;
        } else if ((count > ((275 + leapdelay) * framedivide)) && (count < ((285 + leapdelay) * framedivide))) {
            ref5 = mousex;
            leappointgiven = false;
        } else if ((count > ((315 + leapdelay) * framedivide)) || (count < ((5 + leapdelay) * framedivide))) {
            if ((ref2 < ref3) && (ref3 > ref4)) {
                if (!leappointgiven) {
                point += 10;
                goodbad = 2;
                signal = 1;
                    leappointgiven = true;
                }
            } else if ((ref1 < ref3) && (ref3 > ref5)) {
                if (!leappointgiven) {
                point += 1;
                goodbad = 1;
                signal = 1;
                    leappointgiven = true;
                }
            } else {
                if (!leappointgiven) {
                point -= 2;
                goodbad = 0;
                noneg();
                signal = 1;
                    leappointgiven = true;
                }
            }
        }
    }
}

setInterval(function () {
    leappointsystem();
}, 1000 / 60);
/* refrence from bullseyescript
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
        }*/