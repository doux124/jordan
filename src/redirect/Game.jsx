import React, { useEffect, useRef } from 'react';
import { resources } from "./Resource.js";
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./Vector2.js";
import { GameLoop } from "./GameLoop.js";
import { Input } from "./Input.js";
import { UP, DOWN, LEFT, RIGHT, ENTER } from "./Input.js";
import { useNavigate } from 'react-router-dom';

const Game = () => {
    const canvasRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const canvas = canvasRef.current;

        const ctx = canvas.getContext("2d");

        const backgroundSprite = new Sprite({
            resource: resources.images.background,
            frameSize: new Vector2(3000, 1800),
            scale: 2
        })

        const frisk = new Sprite({
            resource: resources.images.frisk,
            frameSize: new Vector2(224, 280),
            hFrames: 2,
            vFrames: 4,
            frame: 3,
        })

        const pos = new Vector2(160 * 5, 160 * 5);
        const input = new Input();
        let count = 0;
        let animation = true;

        const update = () => {
            count += 1
            if (count < 25) {
                animation = true;
            }
            if (count > 25) {
                animation = false;
            }
            if (count > 50) {
                count = 0;
            }


            if (input.direction === DOWN) {
                pos.y += 10;
                frisk.frame = (animation === true) ? 1 : 3;
            }
            if (input.direction === UP) {
                pos.y -= 10;
                frisk.frame = (animation === true) ? 4 : 6;
            }
            if (input.direction === LEFT) {
                pos.x -= 10;
                frisk.frame = (animation === true) ? 2 : 8;
            }
            if (input.direction === RIGHT) {
                pos.x += 10;
                frisk.frame = (animation === true) ? 5 : 7;
            }

            
            if (input.direction === ENTER) {
                let x = (pos.x < 2200 && pos.x > 1600) ? true : false;
                let y = (pos.y < 450 && pos.y > 200) ? true : false;
                console.log(x, y)
                if (x && y) {
                    navigate('/achievements/research');
                }
            }
        };

        const draw = () => {
            backgroundSprite.drawImage(ctx, 0, 0);
            frisk.drawImage(ctx, pos.x, pos.y);
        };

        const gameLoop = new GameLoop(update, draw);
        gameLoop.start();
        
    }, []);

    return (
        <canvas id="game-canvas" ref={canvasRef} width={3200} height={1800}></canvas>
    );
};

export default Game;
