/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global Audio: false */
/*global console: false */
/*global endofmenu: false */
var canvas = document.getElementById("maincanvas");
var context = canvas.getContext("2d");
var cwidth = 1600;
var cheight = 900;

function highscore() {
    if (highscorescript) {
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
            //if (localStorage.getItem(0star))
            document.getElementById("art0").style.borderWidth = "10px";
            document.getElementById("art0").style.left = (songart0location.left - 0.75).toString() + "%";
            document.getElementById("art0").style.top = "13.5%";
            if (localStorage.getItem("0s") > 4) {
                document.getElementById("art0").src = "0/e0.jpg";
            } else if (localStorage.getItem("0s") > 3) {
                document.getElementById("art0").src = "0/d0.jpg";
            } else if (localStorage.getItem("0s") > 2) {
                document.getElementById("art0").src = "0/c0.jpg";
            } else if (localStorage.getItem("0s") > 1) {
                document.getElementById("art0").src = "0/b0.jpg";
            } else if (localStorage.getItem("0s") > 0) {
                document.getElementById("art0").src = "0/a0.jpg";
            } else {
                document.getElementById("art0").style.filter = "blur(5px)";
            }
            if (mouseclicked) {
                mouseclicked = false;
            }
        } else {
            document.getElementById("art0").style.borderWidth = "0px";
            document.getElementById("art0").style.left = (songart0location.left).toString() + "%";
            document.getElementById("art0").style.top = "15%";
            document.getElementById("art0").src = "0/0.jpg";
            document.getElementById("art0").style.filter = "blur(0px)";
        }
        //lightsbox1
        if (mousex > songart1location.x1 && mousex < songart1location.x2 && mousey > songart1location.y1 && mousey < songart1location.y2) {
            //if (localStorage.getItem(0star))
            document.getElementById("art1").style.borderWidth = "10px";
            document.getElementById("art1").style.left = (songart1location.left - 0.75).toString() + "%";
            document.getElementById("art1").style.top = "13.5%"
            if (localStorage.getItem("1s") > 4) {
                document.getElementById("art1").src = "1/e1.png";
            } else if (localStorage.getItem("1s") > 3) {
                document.getElementById("art1").src = "1/d1.png";
            } else if (localStorage.getItem("1s") > 2) {
                document.getElementById("art1").src = "1/c1.png";
            } else if (localStorage.getItem("1s") > 1) {
                document.getElementById("art1").src = "1/b1.png";
            } else if (localStorage.getItem("1s") > 0) {
                document.getElementById("art1").src = "1/a1.png";
            } else {
                document.getElementById("art1").style.filter = "blur(5px)";
            }
            if (mouseclicked) {
                mouseclicked = false;
            }
        } else {
            document.getElementById("art1").style.borderWidth = "0px";
            document.getElementById("art1").style.left = (songart1location.left).toString() + "%";
            document.getElementById("art1").style.top = "15%";
            document.getElementById("art1").src = "1/1.png";
            document.getElementById("art1").style.filter = "blur(0px)";
        }
        //lightbox2
        if (mousex > songart2location.x1 && mousex < songart2location.x2 && mousey > songart2location.y1 && mousey < songart2location.y2) {
            //if (localStorage.getItem(0star))
            document.getElementById("art2").style.borderWidth = "10px";
            document.getElementById("art2").style.left = (songart2location.left - 0.75).toString() + "%";
            document.getElementById("art2").style.top = "13.5%"
            if (localStorage.getItem("2s") > 4) {
                document.getElementById("art2").src = "2/e2.jpg";
            } else if (localStorage.getItem("2s") > 3) {
                document.getElementById("art2").src = "2/d2.jpg";
            } else if (localStorage.getItem("2s") > 2) {
                document.getElementById("art2").src = "2/c2.jpg";
            } else if (localStorage.getItem("2s") > 1) {
                document.getElementById("art2").src = "2/b2.jpg";
            } else if (localStorage.getItem("2s") > 0) {
                document.getElementById("art2").src = "2/a2.jpg";
            } else {
                document.getElementById("art2").style.filter = "blur(5px)";
            }
            if (mouseclicked) {
                mouseclicked = false;
            }
        } else {
            document.getElementById("art2").style.borderWidth = "0px";
            document.getElementById("art2").style.left = (songart2location.left).toString() + "%";
            document.getElementById("art2").style.top = "15%";
            document.getElementById("art2").src = "2/2.jpg";
            document.getElementById("art2").style.filter = "blur(0px)";
        }
        //lightbox3
       if (mousex > songart3location.x1 && mousex < songart3location.x2 && mousey > songart3location.y1 && mousey < songart3location.y2) {
            //if (localStorage.getItem(0star))
            document.getElementById("art3").style.borderWidth = "10px";
            document.getElementById("art3").style.left = (songart3location.left - 0.75).toString() + "%";
            document.getElementById("art3").style.top = "13.5%"
            if (localStorage.getItem("3s") > 4) {
                document.getElementById("art3").src = "3/e3.jpg";
            } else if (localStorage.getItem("3s") > 3) {
                document.getElementById("art3").src = "3/d3.jpg";
            } else if (localStorage.getItem("3s") > 2) {
                document.getElementById("art3").src = "3/c3.jpg";
            } else if (localStorage.getItem("3s") > 1) {
                document.getElementById("art3").src = "3/b3.jpg";
            } else if (localStorage.getItem("3s") > 0) {
                document.getElementById("art3").src = "3/a3.jpg";
            } else {
                document.getElementById("art3").style.filter = "blur(5px)";
            }
            if (mouseclicked) {
                mouseclicked = false;
            }
        } else {
            document.getElementById("art3").style.borderWidth = "0px";
            document.getElementById("art3").style.left = (songart3location.left).toString() + "%";
            document.getElementById("art3").style.top = "15%";
            document.getElementById("art3").src = "3/3.jpg";
            document.getElementById("art3").style.filter = "blur(0px)";
        }
        //lightbox4
        if (mousex > songart4location.x1 && mousex < songart4location.x2 && mousey > songart4location.y1 && mousey < songart4location.y2) {
            //if (localStorage.getItem(0star))
            document.getElementById("art4").style.borderWidth = "10px";
            document.getElementById("art4").style.left = (songart4location.left - 0.75).toString() + "%";
            document.getElementById("art4").style.top = "13.5%"
            if (localStorage.getItem("4s") > 4) {
                document.getElementById("art4").src = "4/e4.png";
            } else if (localStorage.getItem("4s") > 3) {
                document.getElementById("art4").src = "4/d4.png";
            } else if (localStorage.getItem("4s") > 2) {
                document.getElementById("art4").src = "4/c4.png";
            } else if (localStorage.getItem("4s") > 1) {
                document.getElementById("art4").src = "4/b4.png";
            } else if (localStorage.getItem("4s") > 0) {
                document.getElementById("art4").src = "4/a4.png";
            } else {
                document.getElementById("art4").style.filter = "blur(5px)";
            }
            if (mouseclicked) {
                mouseclicked = false;
            }
        } else {
            document.getElementById("art4").style.borderWidth = "0px";
            document.getElementById("art4").style.left = (songart4location.left).toString() + "%";
            document.getElementById("art4").style.top = "15%";
            document.getElementById("art4").src = "4/4.png";
            document.getElementById("art4").style.filter = "blur(0px)";
        }
        //lightbox5
        if (mousex > songart5location.x1 && mousex < songart5location.x2 && mousey > songart5location.y1 && mousey < songart5location.y2) {
            //if (localStorage.getItem(0star))
            document.getElementById("art5").style.borderWidth = "10px";
            document.getElementById("art5").style.left = (songart5location.left - 0.75).toString() + "%";
            document.getElementById("art5").style.top = "13.5%"
            if (localStorage.getItem("5s") > 4) {
                document.getElementById("art5").src = "5/e5.jpg";
            } else if (localStorage.getItem("5s") > 3) {
                document.getElementById("art5").src = "5/d5.jpg";
            } else if (localStorage.getItem("5s") > 2) {
                document.getElementById("art5").src = "5/c5.jpg";
            } else if (localStorage.getItem("5s") > 1) {
                document.getElementById("art5").src = "5/b5.jpg";
            } else if (localStorage.getItem("5s") > 0) {
                document.getElementById("art5").src = "5/a5.jpg";
            } else {
                document.getElementById("art5").style.filter = "blur(5px)";
            }
            if (mouseclicked) {
                mouseclicked = false;
            }
        } else {
            document.getElementById("art5").style.borderWidth = "0px";
            document.getElementById("art5").style.left = (songart5location.left).toString() + "%";
            document.getElementById("art5").style.top = "15%";
            document.getElementById("art5").src = "5/5.jpg";
            document.getElementById("art5").style.filter = "blur(0px)";
        }
        //song titles 0 
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 50px helvetica";
        context.fillText("Ooh Ahh", convertmousepostocanvas(songart0location.x1, true) + 50, 550);
        context.fillText(localStorage.getItem("0") + " points", convertmousepostocanvas(songart0location.x1, true) + 50, 650);
        context.font = "bold 35px helvetica";
        context.fillText("Twice", convertmousepostocanvas(songart0location.x1, true)+50, 600);
        
        //song titles 1 
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 50px helvetica";
        context.fillText("Bulleyes", convertmousepostocanvas(songart1location.x1, true), 550);
        context.fillText(localStorage.getItem("1") + " points", convertmousepostocanvas(songart1location.x1, true), 650);
        context.font = "bold 35px helvetica";
        context.fillText("Carly Rae Jepsen", convertmousepostocanvas(songart1location.x1, true), 600);
        
        //song titles 2
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 50px helvetica";
        context.fillText("Boombayah", convertmousepostocanvas(songart2location.x1, true), 550);
        context.fillText(localStorage.getItem("2") + " points", convertmousepostocanvas(songart2location.x1, true), 650);
        context.font = "bold 35px helvetica";
        context.fillText("BlackPink", convertmousepostocanvas(songart2location.x1, true), 600);
        
        //song titles 3
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 50px helvetica";
        context.fillText("TT", convertmousepostocanvas(songart3location.x1, true), 550);
        context.fillText(localStorage.getItem("3") + " points", convertmousepostocanvas(songart3location.x1, true), 650);
        context.font = "bold 35px helvetica";
        context.fillText("Twice", convertmousepostocanvas(songart3location.x1, true), 600);
        //song titles 4
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 50px helvetica";
        context.fillText("Whistle", convertmousepostocanvas(songart4location.x1, true), 550);
        context.fillText(localStorage.getItem("4") + " points", convertmousepostocanvas(songart4location.x1, true), 650);
        context.font = "bold 35px helvetica";
        context.fillText("BlackPink", convertmousepostocanvas(songart4location.x1, true), 600);
        //song titles 4
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font = "bold 50px helvetica";
        context.fillText("Hello", convertmousepostocanvas(songart5location.x1, true), 550);
        context.fillText(localStorage.getItem("5") + " points", convertmousepostocanvas(songart4location.x1, true), 650);
        context.font = "bold 35px helvetica";
        context.fillText("Adele", convertmousepostocanvas(songart5location.x1, true), 600);
    }
}