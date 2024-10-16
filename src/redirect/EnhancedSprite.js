import { Sprite } from './Sprite';

export class EnhancedSprite extends Sprite {
    constructor(sprite, message, backgroundColor = 'lightgray', borderColor = 'black', borderWidth = 10) {
        super({
            resource: sprite.resource,
            frameSize: sprite.frameSize,
            hFrames: sprite.hFrames,
            vFrames: sprite.vFrames,
            frame: sprite.frame,
            scale: sprite.scale,
            position: sprite.position
        });
        this.message = message;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
        this.borderWidth = borderWidth;
    }

    drawImage(ctx, x, y) {
        const totalHeight = 1050;
        const totalWidth = 1800;
        const fontSize = 120;
        const lineHeight = 1.2 * fontSize;
        const messageLines = this.message.split('\n');
        const spriteX = x + totalWidth/2 - 200;
        const spriteY = y + totalHeight/2 - 425;
    
        ctx.fillStyle = this.backgroundColor;
        this.roundedRect(ctx, x - this.borderWidth, y - this.borderWidth, totalWidth, totalHeight + this.borderWidth * 2, 20);
        ctx.fill();
    
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = this.borderWidth;
        this.roundedRect(ctx, x - this.borderWidth, y - this.borderWidth, totalWidth, totalHeight + this.borderWidth * 2, 20);
        ctx.stroke();
    
        // Draw the sprite centered in its bounding box
        super.drawImage(ctx, spriteX, spriteY);
    
        // Draw the text centered below the sprite
        const textX = x + totalWidth/2;
        const textY = spriteY + 650;
        ctx.font = `bold ${fontSize}px Caveat`;
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        messageLines.forEach((line, index) => {
            ctx.fillText(line, textX, textY + index * lineHeight);
        });
    }
    

    roundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.arcTo(x + width, y, x + width, y + height, radius);
        ctx.arcTo(x + width, y + height, x, y + height, radius);
        ctx.arcTo(x, y + height, x, y, radius);
        ctx.arcTo(x, y, x + width, y, radius);
        ctx.closePath();
    }
}
