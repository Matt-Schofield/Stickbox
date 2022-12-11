class Player {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;

        this.velY = 0;
        this.velX = 0;

        this.accelX = 1;
        this.accelY = 0;

        this.canMove = false;
        this.TOP_SPEED = 5;

        this.width = 24
        this.height = 50;
    }

    move() {
        if (keyIsPressed === true) {
            // Gotta be a nicer way of handling inputs...
            this.canMove = false;

            // A - Left
            if (keyIsDown(65)) {
                this.accelX = -0.3;
                this.canMove = true;
            }
            // D - Right
            if (keyIsDown(68)) {
                this.accelX = 0.3;
                this.canMove = true;
            }

            // && Math.abs(this.velX) < this.TOP_SPEED
            if (this.canMove) {
                this.velX += this.accelX;
            }
            
            this.checkBounds();
        } else {
            this.accelX = 0;
            if (this.velX != 0) {
                this.velX += this.velX > 0? -1 : 1;
            }
        }

        this.x += this.velX;
    }

    checkBounds() {
        if (this.x > CANVAS_X) {
            this.x = -this.width;
        }

        if (this.x < -this.width) {
            this.x = CANVAS_X;
        }
    }

    drawPerson() {
        // Legs
        line(this.x, CANVAS_Y - this.y, this.x + (this.width / 2), CANVAS_Y - (this.y + 40));
        line(this.x + this.width, CANVAS_Y - this.y, this.x + (this.width / 2), CANVAS_Y - (this.y + 40));
        // Body
        line(this.x + (this.width / 2), CANVAS_Y - (this.y + 40), this.x + (this.width / 2), CANVAS_Y - (this.y + 80));
        // Head
        circle(this.x + (this.width / 2), CANVAS_Y - (this.y + 95), 30);
        // Arms
        line(this.x, CANVAS_Y - (this.y + 40), this.x + (this.width / 2), CANVAS_Y - (this.y + 70));
        line(this.x + this.width, CANVAS_Y - (this.y + 40), this.x + (this.width / 2), CANVAS_Y - (this.y + 70));
    }

    drawVerbose() {
        // Debugging
        text(`X: ${this.x.toFixed(1)}`, 10, 30);
        text(`Vel X: ${this.velX.toFixed(1)}`, 10, 60);
        text(`Accel X: ${this.accelX.toFixed(1)}`, 10, 90);
    }
}