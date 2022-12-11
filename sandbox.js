// Constants
const CANVAS_X = window.innerWidth;
const CANVAS_Y = 600;

// Setup
function setup() {
    createCanvas(CANVAS_X, CANVAS_Y);
    
    background(240);
    strokeWeight(4);

    env = new Environment();
    player = new Player(20, env.FLOOR_HEIGHT);
}

// Run loop
function draw() {
    clear();
    env.drawEnvironmentBackground();

    player.move();
    player.drawPerson();
    player.drawVerbose();

    env.drawEnvironmentForeground();
}