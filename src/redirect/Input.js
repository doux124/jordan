export const LEFT = "LEFT";
export const RIGHT = "RIGHT";
export const UP = "UP";
export const DOWN = "DOWN";
export const ENTER = "ENTER";

export class Input {
    constructor() {
        this.heldDirections = [];
        this.touchButtons = [];

        this.touchStartHandler = this.touchStartHandler.bind(this);
        this.touchEndHandler = this.touchEndHandler.bind(this);
        this.mouseDownHandler = this.mouseDownHandler.bind(this);
        this.mouseUpHandler = this.mouseUpHandler.bind(this);

        document.addEventListener("keydown", (e) => this.keyDownHandler(e));
        document.addEventListener("keyup", (e) => this.keyUpHandler(e));

        this.createTouchControls();
    }

    get direction() {
        return this.heldDirections[0];
    }

    onArrowPressed(direction) {
        if (this.heldDirections.indexOf(direction) === -1) {
            this.heldDirections.unshift(direction);
        }
    }

    onArrowReleased(direction) {
        const index = this.heldDirections.indexOf(direction);
        if (index === -1) {
            return;
        }
        this.heldDirections.splice(index, 1);
    }

    keyDownHandler(e) {
        if (e.code === "ArrowUp" || e.code === "KeyW") {
            this.onArrowPressed(UP);
        }

        if (e.code === "ArrowDown" || e.code === "KeyS") {
            this.onArrowPressed(DOWN);
        }

        if (e.code === "ArrowLeft" || e.code === "KeyA") {
            this.onArrowPressed(LEFT);
        }

        if (e.code === "ArrowRight" || e.code === "KeyD") {
            this.onArrowPressed(RIGHT);
        }

        if (e.code === "Enter") {
            this.onArrowPressed(ENTER);
        }
    }

    keyUpHandler(e) {
        if (e.code === "ArrowUp" || e.code === "KeyW") {
            this.onArrowReleased(UP);
        }

        if (e.code === "ArrowDown" || e.code === "KeyS") {
            this.onArrowReleased(DOWN);
        }

        if (e.code === "ArrowLeft" || e.code === "KeyA") {
            this.onArrowReleased(LEFT);
        }

        if (e.code === "ArrowRight" || e.code === "KeyD") {
            this.onArrowReleased(RIGHT);
        }

        if (e.code === "Enter") {
            this.onArrowReleased(ENTER);
        }
    }

    createTouchControls() {
        const controls = [
            { id: "UP", direction: UP },
            { id: "DOWN", direction: DOWN },
            { id: "LEFT", direction: LEFT },
            { id: "RIGHT", direction: RIGHT },
            { id: "ENTER", direction: ENTER }
        ];

        controls.forEach(control => {
            const button = document.createElement("button");
            button.id = control.id;
            button.innerText = control.direction;
            button.style.position = "absolute";
            button.style.touchAction = "none";  
            button.style.width = "50px"; 
            button.style.height = "50px";
            button.style.color = "white"; 
            button.style.backgroundColor = "black";
            button.style.fontSize = "25px"; 

            switch (control.direction) {
                case UP:
                    button.style.bottom = "120px";
                    button.style.left = "60px";
                    button.innerText = "W";
                    break;
                case DOWN:
                    button.style.bottom = "40px";
                    button.style.left = "60px";
                    button.innerText = "S";
                    break;
                case LEFT:
                    button.style.bottom = "80px";
                    button.style.left = "20px";
                    button.innerText = "A";
                    break;
                case RIGHT:
                    button.style.bottom = "80px";
                    button.style.left = "100px";
                    button.innerText = "D";
                    break;
                case ENTER:
                    button.style.bottom = "80px";
                    button.style.right = "70px";
                    button.style.width = "100px";
                    break;
            }

            button.addEventListener("touchstart", this.touchStartHandler);
            button.addEventListener("touchend", this.touchEndHandler);
            button.addEventListener("mousedown", this.mouseDownHandler);
            button.addEventListener("mouseup", this.mouseUpHandler);

            document.body.appendChild(button);
            this.touchButtons.push(button); 
        });

        const blankButton = document.createElement("button");
        blankButton.style.position = "absolute";
        blankButton.style.width = "50px";
        blankButton.style.height = "50px";
        blankButton.style.backgroundColor = "black";
        blankButton.style.bottom = "80px";
        blankButton.style.left = "60px";

        document.body.appendChild(blankButton);
        this.touchButtons.push(blankButton); 
    }

    touchStartHandler(e) {
        e.preventDefault();
        const direction = e.target.id;
        this.onArrowPressed(direction);
    }
  
    touchEndHandler(e) {
        e.preventDefault();
        const direction = e.target.id;
        this.onArrowReleased(direction);
    } 
    mouseDownHandler(e) {
        e.preventDefault();
        const direction = e.target.id;
        this.onArrowPressed(direction);
    } 
    mouseUpHandler(e) {
        e.preventDefault();
        const direction = e.target.id;
        this.onArrowReleased(direction);
    }
    

    stop() {
        this.touchButtons.forEach(button => {
            if (button.parentNode) {
                button.parentNode.removeChild(button);
            }
        });
        this.touchButtons = [];
    }
}
