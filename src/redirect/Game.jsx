import { useEffect, useRef } from 'react';
import { resources } from "./Resource.js";
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./Vector2.js";
import { GameLoop } from "./GameLoop.js";
import { Input } from "./Input.js";
import { UP, DOWN, LEFT, RIGHT, ENTER } from "./Input.js";
import { useNavigate } from 'react-router-dom';
import { Walls } from "./Walls.js";
import Music from '../components/Music';

const Game = () => {
    const canvasRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const canvas = canvasRef.current;

        const ctx = canvas.getContext("2d");

        const backgroundSprite = new Sprite({
            resource: resources.images.unlit,
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

        const heart = new Sprite({
            resource: resources.images.heart,
            frameSize: new Vector2(145, 139),
            hFrames: 4,
            vFrames: 1,
            frame: 1,
        })

        const pos = new Vector2(760, 100); // Frisk's starting point
        const input = new Input();
        let count = 0;
        let animation = true;
        let light = false;

        const walls = new Walls();
        walls.addWall(420, 170, 520, 1270);
        walls.addWall(520, -250, 700, 270);
        walls.addWall(2514, 370, 2524, 770);
        walls.addWall(1044, -250, 1354, 270);
        walls.addWall(1334, 270, 2574, 350);
        walls.addWall(520, 1470, 2680, 1480);
        walls.addWall(2514, 1380, 3220, 1580);
        walls.addWall(2514, 820, 3220, 830);
        walls.addWall(2824, 820, 2834, 1390);
        
        let lastEnterPress = 0;

        const update = () => {
            const currentTime = Date.now();
            if (!light) {backgroundSprite.resource = resources.images.unlit;} 

            count += 1
            if (count < 25) {
                animation = true;
                if (light) {backgroundSprite.resource = resources.images.lit1;}
            }
            if (count > 25) {
                animation = false;
                if (light) {backgroundSprite.resource = resources.images.lit2;}
            }
            if (count > 50) {
                count = 0;
                heart.frame = Math.floor(Math.random() * 4) + 1;
            }


            if (input.direction === DOWN) {
                if (!walls.checkCollision(pos.x, pos.y + 10, frisk.frameSize.x, frisk.frameSize.y)) {
                    pos.y += 10;
                }
                frisk.frame = (animation === true) ? 1 : 3;
            }
            if (input.direction === UP) {
                if (!walls.checkCollision(pos.x, pos.y - 10, frisk.frameSize.x, frisk.frameSize.y)) {
                    pos.y -= 10;
                }     
                frisk.frame = (animation === true) ? 4 : 6;
            }
            if (input.direction === LEFT) {
                if (!walls.checkCollision(pos.x - 10, pos.y, frisk.frameSize.x, frisk.frameSize.y)) {
                    pos.x -= 10;
                }
                frisk.frame = (animation === true) ? 2 : 8;
            }
            if (input.direction === RIGHT) {
                if (!walls.checkCollision(pos.x + 10, pos.y, frisk.frameSize.x, frisk.frameSize.y)) {
                    pos.x += 10;
                }
                frisk.frame = (animation === true) ? 5 : 7;
            }

            
            if (input.direction === ENTER && currentTime - lastEnterPress >= 1000) {
                console.log(pos);
                lastEnterPress = currentTime;

                // Bookshelf
                let x = (pos.x < 2100 && pos.x > 1700) ? true : false;
                let y = (pos.y < 400 && pos.y > 200) ? true : false;
                if (x && y) {
                    navigate('/achievements/research');
                }
                
                // Heart
                x = (pos.x < 2700 && pos.x > 2500) ? true : false;
                y = (pos.y < 1090 && pos.y > 890) ? true : false;
                if (x && y) {
                    navigate('/achievements/volunteer');
                }

                // Fireplace
                x = (pos.x < 1600 && pos.x > 1300) ? true : false;
                y = (pos.y < 400 && pos.y > 200) ? true : false;
                if (x && y) {
                    light = !light;
                }
            }
        };

        const draw = () => {
            backgroundSprite.drawImage(ctx, 0, 0);
            frisk.drawImage(ctx, pos.x, pos.y);
            heart.drawImage(ctx, 2800, 1100);
        };

        const gameLoop = new GameLoop(update, draw);
        gameLoop.start();

        return () => {
            input.stop();
            gameLoop.stop();
        };

    }, []);

    return (
        <canvas id="game-canvas" ref={canvasRef} width={3200} height={1800}>
            <Music />
        </canvas>
    );
};

export default Game;
