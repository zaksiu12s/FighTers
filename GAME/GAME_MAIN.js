//STAŁE

var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;


//KONFIGURACJA WSTĘPNA

var canvas = document.createElement('canvas');
var c = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
document.body.appendChild(canvas);

window.addEventListener('load', start);

function start() {
    window.requestAnimationFrame(mainLoop);
}




//PĘTLA GŁÓWNA

function mainLoop() {
    update();
    draw();
    window.requestAnimationFrame(mainLoop);
}



//STEROWANIE

function klawiszDown(klawisz) {
    if (klawisz.keyCode === SPACE_KEYCODE) {
        spaceKeyIsPressed = true;
    }
}

function klawiszUp(klawisz) {
    if (klawisz.keyCode === SPACE_KEYCODE) {
        spaceKeyIsPressed = false;
    }
}



//AKTUALIZACJA

function update() {
}



//RYSOWANIE

function draw() {
    c.fillStyle = 'LightSkyBlue';
    c.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
