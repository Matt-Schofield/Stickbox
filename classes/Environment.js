class Environment {
    constructor() {
        this.FLOOR_HEIGHT = CANVAS_Y - 20
    }
    drawEnvironmentBackground() {
        line(0, this.FLOOR_HEIGHT, CANVAS_X, this.FLOOR_HEIGHT);
    }

    drawEnvironmentForeground() {
        rect(0, this.FLOOR_HEIGHT - 120, 20, 120);

        rect(CANVAS_X - 20, this.FLOOR_HEIGHT - 120, 20, 120);
    }
}