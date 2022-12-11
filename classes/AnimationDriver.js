class AnimationDriver {
    constructor(_type) {
        this.type = _type;

        this.entityWidth = 32;
        this.entityHeight = 100;

        this.nodes = this.initNodes();
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
                this.nodes = this.setStatic();
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
        frames = [

        ];
    }

    setJump() {
        frames = [

        ];
    }
}