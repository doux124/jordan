export class Walls {
    constructor() {
        this.walls = [];
    }

    addWall(x1, y1, x2, y2) {
        this.walls.push({ x1, y1, x2, y2 });
    }

    checkCollision(x, y, width, height) {
        return this.walls.some(wall => {
            return x < wall.x2 && x + width > wall.x1 && y < wall.y2 && y + height > wall.y1;
        });
    }
}
