class Player {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;

        this.velY = 0;
        this.velX = 0;

        this.accelX = 1;
        this.accelY = 0;

        this.deccelX = 0.85;
        this.deccelY = 0.8;

        this.canMove = false;
        this.TOP_SPEED = 15;

        this.AnimationEnum = {
            STATIC: 0,
            IDLING: 1,
            WALKING: 2,
            JUMP: 3,
            CROUCH: 4,
            SLIDE: 5
        }

        this.animation = this.AnimationEnum.STATIC;

        // Animations
        this.driver = new AnimationDriver("Player");
    }

    move() {
        if (keyIsPressed === true) {
            // Gotta be a nicer way of handling inputs...
            let canMove = false;

            // A - Left
            if (keyIsDown(65) && this.velX > (-1 * this.TOP_SPEED)) {
                this.accelX = -0.4;
                canMove = true;
            }
            // D - Right
            if (keyIsDown(68) && this.velX < this.TOP_SPEED) {
                this.accelX = 0.4;
                canMove = true;
            }

            if (canMove) {
                this.velX += this.accelX;
            }
            
            this.checkBounds();
        } else {
            this.accelX = 0;
            if (this.velX != 0) {
                // this.velX += this.velX > 0? -2 : 2;
                this.velX *= this.deccelX;
            }

            if (Math.abs(this.velX) < 1) {
                this.velX = 0;
            }
        }

        this.x += this.velX;
    }

    checkBounds() {
        if (this.x > CANVAS_X) {
            this.x = -this.driver.entityWidth;
        }

        if (this.x < -this.driver.entityWidth) {
            this.x = CANVAS_X;
        }
    }

    drawPerson() {
        this.driver.animateEntity(this.animation, this.x, this.y);

        // Add for easier readability
        let nodes = this.driver.nodes;

        // Head
        circle(nodes.head.x, nodes.head.y, 30);

        // Body
        line(nodes.kneck.x, nodes.kneck.y, nodes.balls.x, nodes.balls.y);    

        // Arms - Upper
        line(nodes.kneck.x, nodes.kneck.y, nodes.leftElbow.x, nodes.leftElbow.y);
        line(nodes.kneck.x, nodes.kneck.y, nodes.rightElbow.x, nodes.rightElbow.y);
        // Arms - Lower
        line(nodes.leftElbow.x, nodes.leftElbow.y, nodes.leftHand.x, nodes.leftHand.y);
        line(nodes.rightElbow.x, nodes.rightElbow.y, nodes.rightHand.x, nodes.rightHand.y);
        
        // Legs - Upper
        line(nodes.balls.x, nodes.balls.y, nodes.leftKnee.x, nodes.leftKnee.y);
        line(nodes.balls.x, nodes.balls.y, nodes.rightKnee.x, nodes.rightKnee.y);
        // Legs - Lower
        line(nodes.leftKnee.x, nodes.leftKnee.y, nodes.leftFoot.x, nodes.leftFoot.y);
        line(nodes.rightKnee.x, nodes.rightKnee.y, nodes.rightFoot.x, nodes.rightFoot.y);
    }

    drawVerbose() {
        // Debugging
        text(`X: ${this.x.toFixed(1)}`, 10, 30);
        text(`Vel X: ${this.velX.toFixed(1)}`, 10, 60);
        text(`Accel X: ${this.accelX.toFixed(1)}`, 10, 90);
    }
}