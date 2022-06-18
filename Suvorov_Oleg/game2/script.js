//&& || ↓ → ← ↑ && 
var canvas = document.getElementById("canvas");
var canavswidth = 512;
var canavsheight = 720;

canvas.width = canavswidth;
canvas.height = canavsheight;
var canvasContext = canvas.getContext("2d");

canvasContext.fillStyle = "red";
canvasContext.strokeStyle = "green";
class player {
    constructor() {

    }
    redraw() {
        canvasContext.drawImage(Ihero, pposX, pposY, 52, 74);
    }

}
class object {
    constructor() {
        this.reset();
    }
    redraw() {
        this.posY += 10;
        canvasContext.fillStyle = "black";
        canvasContext.fillRect(this.posX, this.posY, this.sizeX, this.sizeY);
        if (this.posY > canavsheight) {
            this.reset();
        }
    }
    reset() {
        this.sizeX = Math.floor(Math.random() * 100);
        this.sizeY = Math.floor(Math.random() * 100);
        this.posX = Math.floor(Math.random() * canavswidth);
        this.posY = -100
    }
}
class star {
    constructor() {

    }
    redraw() {

    }
    reset() {

    }
}
var pposX = 0;
var pposY = 0;
let Ihero = new Image();

Ihero.src = "img/hero.png"

hero = new player();
p1 = new object();
var objects = [];
for (var i = 0; i < 10; i++){
    objects.push(new object());
    objects[i].posY = (i*140);
}
updater();

window.addEventListener("keydown", onCanvasKeyDown);
window.addEventListener("mousemove", onMouseMove);
function onCanvasKeyDown(event) {
    if (event.key == "a") {
        pposX -= 10;
        if (pposX < 20) {
            pposX = 20
        }

    }
    else if (event.key == "d") {
        pposX += 10;
        if (pposX > canavswidth - 40) {
            pposX = canavswidth - 40
        }

    }
    updater();
}

function onMouseMove(event) {
    pposX = event.clientX - 52 / 1.5;
    if (pposX > canavswidth - 40)
        pposX = canavswidth - 40
    if (pposX < 20)
        pposX = 20
    pposY = event.clientY - 74 / 1.5;
    if (pposY > canavsheight - 40)
        pposY = canavsheight - 40
    if (pposY < 20)
        pposY = 20

}

function updater() {
    canvasContext.fillStyle = "#aaaaaa";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 10; i++)
        objects[i].redraw();
    p1.redraw();
    hero.redraw();
    requestAnimationFrame(updater);
}