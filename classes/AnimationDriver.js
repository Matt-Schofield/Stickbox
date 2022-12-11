class AnimationDriver {
    constructor(_type) {
        this.type = _type;

        this.entityWidth = 32;
        this.entityHeight = 100;

        this.nodes = this.initNodes();

        this.frameCounter = 0;

        this.IDLE_FRAMES = [
            {
                head: { x: 0.8, y: 1 },
                kneck: { x: 0.7, y: 0.85 },
                leftElbow: { x: 0.20, y: 0.7 },
                rightElbow: { x: 0.95, y: 0.6 },
                leftHand: { x: 0.2, y: 0.55 },
                rightHand: { x: 1.25, y: 0.55 },
                balls: { x: 0.5, y: 0.5 },
                leftKnee: { x: 0.3, y: 0.25 },
                rightKnee: { x: 0.80, y: 0.25 },
                leftFoot: { x: 0, y: 0 },
                rightFoot: { x: 0.7, y: 0 },
            },
            {
                head: { x: 0.8, y: 0.97 },
                kneck: { x: 0.7, y: 0.82 },
                leftElbow: { x: 0.20, y: 0.67 },
                rightElbow: { x: 0.95, y: 0.57 },
                leftHand: { x: 0.23, y: 0.52 },
                rightHand: { x: 1.25, y: 0.54 },
                balls: { x: 0.5, y: 0.47 },
                leftKnee: { x: 0.3, y: 0.22 },
                rightKnee: { x: 0.83, y: 0.22 },
                leftFoot: { x: 0, y: 0 },
                rightFoot: { x: 0.7, y: 0 },
            },
            {
                head: { x: 0.8, y: 0.95 },
                kneck: { x: 0.7, y: 0.80 },
                leftElbow: { x: 0.20, y: 0.65 },
                rightElbow: { x: 0.95, y: 0.55 },
                leftHand: { x: 0.25, y: 0.50 },
                rightHand: { x: 1.25, y: 0.52 },
                balls: { x: 0.5, y: 0.45 },
                leftKnee: { x: 0.3, y: 0.20 },
                rightKnee: { x: 0.85, y: 0.20 },
                leftFoot: { x: 0, y: 0 },
                rightFoot: { x: 0.7, y: 0 },
            },
            {
                head: { x: 0.8, y: 0.97 },
                kneck: { x: 0.7, y: 0.82 },
                leftElbow: { x: 0.20, y: 0.67 },
                rightElbow: { x: 0.95, y: 0.57 },
                leftHand: { x: 0.23, y: 0.52 },
                rightHand: { x: 1.25, y: 0.54 },
                balls: { x: 0.5, y: 0.47 },
                leftKnee: { x: 0.3, y: 0.22 },
                rightKnee: { x: 0.83, y: 0.22 },
                leftFoot: { x: 0, y: 0 },
                rightFoot: { x: 0.7, y: 0 },
            }
        ];
    }

    initNodes() {
        return {
            head: { x: 0, y: 0 },
            kneck: { x: 0, y: 0 },
            leftElbow: { x: 0, y: 0 },
            rightElbow: { x: 0, y: 0 },
            leftHand: { x: 0, y: 0 },
            rightHand: { x: 0, y: 0 },
            balls: { x: 0, y: 0 },
            leftKnee: { x: 0, y: 0 },
            rightKnee: { x: 0, y: 0 },
            leftFoot: { x: 0, y: 0 },
            rightFoot: { x: 0, y: 0 },
        };
    }

    animateEntity(animation, x, y) {
        switch (animation) {
            case 0:
                this.nodes = this.setStatic();
                break;
            case 1:
                this.nodes = this.setIdling();
                break;
            case 2:
                this.nodes = this.setStatic();
                break;
            case 3:
                this.nodes = this.setStatic();
                break;
            case 4:
                this.nodes = this.setStatic();
                break;
            case 5:
                this.nodes = this.setStatic();
                break;
            default:
                this.nodes = this.setStatic();
        }

        // console.log(animation, x, y);

        for (const node in this.nodes) {
            this.nodes[node].x = x + (this.entityWidth * this.nodes[node].x);
            this.nodes[node].y = y - (this.entityHeight * this.nodes[node].y);
        }
    }

    setStatic() {
        return {
            head: { x: 0.8, y: 1 },
            kneck: { x: 0.7, y: 0.85 },
            leftElbow: { x: 0.20, y: 0.7 },
            rightElbow: { x: 0.95, y: 0.6 },
            leftHand: { x: 0.2, y: 0.55 },
            rightHand: { x: 1.25, y: 0.55 },
            balls: { x: 0.5, y: 0.5 },
            leftKnee: { x: 0.3, y: 0.25 },
            rightKnee: { x: 0.80, y: 0.25 },
            leftFoot: { x: 0, y: 0 },
            rightFoot: { x: 0.7, y: 0 },
        };
    }

    setIdling() {
        // Loop frame counter - can be own method
        if (this.frameCounter > ((this.IDLE_FRAMES.length * 20) - 1)) {
            this.frameCounter = 0;
        }

        let frame = structuredClone(this.IDLE_FRAMES[Math.floor(this.frameCounter/20)]);
        this.frameCounter += 1;

        return frame;
    }

    setJump() {
        frames = [

        ];
    }
}