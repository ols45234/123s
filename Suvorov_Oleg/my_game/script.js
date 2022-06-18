//&& || ↓ → ← ↑ && 
var canvas = document.getElementById("canvas");
var canavswidth = 600;
var canavsheight = 900;

canvas.width = canavswidth;
canvas.height = canavsheight;
var canavswidth = 500;
var canvasContext = canvas.getContext("2d");


class gun {
    constructor() {
        this.posx = ppos + 10;
        this.posy = canavsheight - 20;
    }
    redraw() {
        this.posy -= 3;
        canvasContext.fillStyle = "blue";
        canvasContext.beginPath();
        canvasContext.arc(this.posx, this.posy, 10, 0, 2 * Math.PI);
        canvasContext.fill();
        canvasContext.closePath();
        if (this.posy < 10) {
            this.reset();
        }

    }
    reset() {
        this.posx = ppos + 10;
        this.posy = canavsheight - 20;
    }
}
var gun1 = new gun();

class meteor {
    constructor() {
        this.speed = 0;
        this.iter = 0;
        this.posx = getRandomInt(canavswidth);
        this.size = getRandomInt(25) + 40;
        this.iskit = false;
    }
    redraw() {
        this.speed += 1;
        this.iter = this.iter + this.speed;
        if (this.iskit == false) {
            // canvasContext.fillStyle = "black";
            // canvasContext.beginPath();
            // canvasContext.arc(this.posx, this.iter / 20, this.size, 0, 2 * Math.PI);
            // canvasContext.fill();
            // canvasContext.closePath();
            canvasContext.drawImage(img, this.posx, this.iter / 20, this.size, this.size*2);
        } else {
            canvasContext.fillStyle = "white";
            canvasContext.beginPath();
            canvasContext.arc(this.posx, this.iter / 20, this.size/2, 0, 2 * Math.PI);
            canvasContext.fill();
            canvasContext.closePath();
        }
        if (this.iter / 20 > canavsheight) {
            this.reset();
        }

        if (((ppos - this.posx) < this.size && (ppos - this.posx) > -this.size) && (this.iter / 20 > canavsheight - 20)) {
            if (heath == 1 && this.iskit == false) {
                console.log("game over");
                this.reset();
                score = 0;
                heath = 3;
                alert("game over.")
            } else if (this.iskit == false) {
                this.reset();
                heath--;
            } else {
                //if(heath <= 5)
                heath++;
                this.reset();
            }
        }
        if (((gun1.posx - this.posx) < this.size && (gun1.posx - this.posx) > -this.size) && ((gun1.posy - this.iter / 20) < this.size && (gun1.posy - this.iter / 20) > -this.size)) {
            score++;
            if (Math.random() > 0.8 || this.iskit == true) {
                this.iskit = true;
            }
            else {
                this.reset();
            }
        }
    }
    reset() {
        this.speed = getRandomInt(50);
        this.iter = getRandomInt(1000);
        this.size = getRandomInt(350) + 20;
        this.iskit = false;
        if (Math.random() > 1) {
            this.posx = Math.random() * canavswidth - 20;
        }
        else {
            this.posx = ppos
        }
    }

}
let img = new Image();
img.src = "img/meteor.png";
var score = 0;
var ppos = 0;
var heath = 3;
window.addEventListener("keydown", onCanvasKeyDown);
window.addEventListener("mousemove", onMouseMove);


function onCanvasKeyDown(event) {
    if (event.key == "a") {
        ppos -= 10;
        if (ppos < 20) {
            ppos = 20
        }

    }
    else if (event.key == "d") {
        ppos += 10;
        if (ppos > canavswidth - 20) {
            ppos = canavswidth - 20
        }

    }
    meteors();
}

function onMouseMove(event) {
    if(event.clientX < canavswidth)
        ppos = event.clientX - 20/2;
}

canvasContext.fillStyle = "red";
canvasContext.strokeStyle = "green";

var meteor1 = new meteor();
var meteor2 = new meteor();
var meteor3 = new meteor();
var meteor4 = new meteor();
var meteor5 = new meteor();
var meteor6 = new meteor();
var meteor7 = new meteor();
var meteor8 = new meteor();
var meteor9 = new meteor();
var meteor10 = new meteor();
var meteor11 = new meteor();
var meteor12 = new meteor();
var meteor13 = new meteor();
var meteor14 = new meteor();
var meteor15 = new meteor();
var meteor16 = new meteor();
var meteor17 = new meteor();
var meteor18 = new meteor();
var meteor19 = new meteor();
var meteor20 = new meteor();
var meteor21 = new meteor();
var meteor22 = new meteor();
var meteor23 = new meteor();
var meteor24 = new meteor();

setInterval(meteors, 2);


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function meteors() {
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(0, 0, canvas.width, canavsheight);
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(500, 0, canvas.width, canavsheight);
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(ppos, canavsheight - 20, 20, 20);
    gun1.redraw();
    meteor1.redraw();
    meteor2.redraw();
    meteor3.redraw();
    meteor4.redraw();
    meteor5.redraw();
    meteor6.redraw();
    meteor7.redraw();
    meteor8.redraw();
    meteor9.redraw();
    meteor10.redraw();
    meteor11.redraw();
    meteor12.redraw();
    meteor13.redraw();
    meteor14.redraw();
    meteor15.redraw();
    meteor16.redraw();
    meteor17.redraw();
    meteor18.redraw();
    meteor19.redraw();
    meteor20.redraw();
    meteor21.redraw();
    meteor21.redraw();
    meteor23.redraw();
    meteor24.redraw();
    canvasContext.font = "20px Arial";
    canvasContext.fillStyle = "red";
    canvasContext.fillText("score:" + String(score), 500, 50);
    canvasContext.fillText("heath:" + String(heath), 500, 80);
}