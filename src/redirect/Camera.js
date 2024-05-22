class Camera {
    constructor(width, height) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
    }

    update(playerPos, worldWidth, worldHeight) {
        this.x = Math.max(0, Math.min(playerPos.x - this.width / 2, worldWidth - this.width));
        this.y = Math.max(0, Math.min(playerPos.y - this.height / 2, worldHeight - this.height));
    }
}

export default Camera;
