// Constants
const CANVAS_X = 1200;
const CANVAS_Y = 600;

const FLOOR_HEIGHT = 20;

// Setup
function setup() {
    createCanvas(CANVAS_X, CANVAS_Y);

    strokeWeight(4);

    player = new Player(20, FLOOR_HEIGHT);

    env = new Environment();
    env.drawEnvironment();
    background(240);
}

// Run loop
function draw() {
    clear();

    player.move();
    player.drawPerson();
    player.drawVerbose();
}