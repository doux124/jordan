import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Camera from './Camera.js';
import rooms from './Rooms.js';
import { Input } from "./Input.js";
import { Walls } from "./Walls.js";
import Music from '../components/Music';
import { resources } from "./Resource.js";
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./Vector2.js";
import { GameLoop } from "./GameLoop.js";
import { UP, DOWN, LEFT, RIGHT, ENTER } from "./Input.js";

const Game = () => {
    const canvasRef = useRef(null);
    const navigate = useNavigate();
    const [currentRoom, setCurrentRoom] = useState('mainRoom');
    const [main, setMain] = useState(true);
    const [pos, setPos] = useState(new Vector2(760, 100));
    const [transitionInProgress, setTransitionInProgress] = useState(false);
    const [fresh, setFresh] = useState(true);
    const [lit, setLit] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const frisk = new Sprite({
            resource: resources.images.frisk,
            frameSize: new Vector2(224, 280),
            hFrames: 2,
            vFrames: 4,
            frame: fresh ? 3 : (currentRoom === 'mainRoom' ? 8 : 7),
        })

        const camera = new Camera(canvas.width, canvas.height);

        const walls = new Walls();
        rooms[currentRoom].walls.forEach(wall => {
            walls.addWall(wall.x1, wall.y1, wall.x2, wall.y2);
        });

        const input = new Input();
        let count = 0;
        let animation = true;
        let lastEnterPress = 0;
        let trans = 0;
        let time = 0;
        let light = lit;

        const update = () => {
            camera.update(pos, rooms[currentRoom].width, rooms[currentRoom].height);
            const currentTime = Date.now();

            if (transitionInProgress && time < 100) {
                if (trans != 0) { time += currentTime - trans; }
                trans = currentTime;
                return;
            } else { setTransitionInProgress(false); }
            if (currentRoom === 'mainRoom' && pos.x > 3000) {
                setTransitionInProgress(true);
                setCurrentRoom('longRoom');
                setPos(new Vector2(50, pos.y));
                setMain(false);
                setFresh(false);
            } else if (currentRoom === 'longRoom' && pos.x < 50) {
                setTransitionInProgress(true);
                setCurrentRoom('mainRoom');
                setPos(new Vector2(2950, pos.y));
                setMain(true);
            }

            if (!light && main) { rooms[currentRoom].background.resource = resources.images.unlit; }

            count += 1
            if (count < 25) {
                animation = true;
                if (light && main) {rooms[currentRoom].background.resource = resources.images.lit1;}
            }
            if (count > 25) {
                animation = false;
                if (light && main) {rooms[currentRoom].background.resource = resources.images.lit2;}
            }
            if (count > 50) {
                count = 0;
                // animations go here
            }

            if (input.direction === DOWN) {
                if (!walls.checkCollision(pos.x, pos.y + 10, frisk.frameSize.x, frisk.frameSize.y)) {
                    pos.y += 10;
                }
                frisk.frame = animation ? 1 : 3;
            }
            if (input.direction === UP) {
                if (!walls.checkCollision(pos.x, pos.y - 10, frisk.frameSize.x, frisk.frameSize.y)) {
                    pos.y -= 10;
                }     
                frisk.frame = animation ? 4 : 6;
            }
            if (input.direction === LEFT) {
                if (!walls.checkCollision(pos.x - 10, pos.y, frisk.frameSize.x, frisk.frameSize.y)) {
                    pos.x -= 10;
                }
                frisk.frame = animation ? 2 : 8;
            }
            if (input.direction === RIGHT) {
                if (!walls.checkCollision(pos.x + 10, pos.y, frisk.frameSize.x, frisk.frameSize.y)) {
                    pos.x += 10;
                }
                frisk.frame = animation ? 5 : 7;
            }
     
            if (input.direction === ENTER && currentTime - lastEnterPress >= 1000) {
                console.log(pos, main);
                lastEnterPress = currentTime;

                // Bookshelf
                let x = (pos.x < 2100 && pos.x > 1700) ? true : false;
                let y = (pos.y < 400 && pos.y > 200) ? true : false;
                if (x && y) {
                    navigate('/achievements/research');
                }

                // Fireplace
                x = (pos.x < 1600 && pos.x > 1300) ? true : false;
                y = (pos.y < 400 && pos.y > 200) ? true : false;
                if (x && y) {
                    light = !light;
                    setLit(light);
                }
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            rooms[currentRoom].background.drawImage(ctx, -camera.x, -camera.y);
            frisk.drawImage(ctx, pos.x, pos.y);
        };

        const gameLoop = new GameLoop(update, draw);
        gameLoop.start();

        return () => {
            input.stop();
            gameLoop.stop();
        };

    }, [currentRoom]);

    return (
        <canvas id="game-canvas" ref={canvasRef} width={3200} height={1800}>
            <Music />
        </canvas>
    );
};

export default Game;
