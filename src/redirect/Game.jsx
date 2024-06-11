import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Camera from './Camera.js';
import rooms from './Rooms.js';
import { Input } from "./Input.js";
import { Walls } from "./Walls.js";
import Music from '../components/Music';
import { resources }  from "./Resource.js";
import { Sprite } from "./Sprite.js";
import { EnhancedSprite } from './EnhancedSprite.js';
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
    const [music, setMusic] = useState(true);
    const [havePlant, setPlant] = useState(false);

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
        const radio = new Sprite({
            resource: resources.images.radio1,
            frameSize: new Vector2(138, 145),
            hFrames: 1,
            vFrames: 1,
            frame: 1,
            scale: 2,
        })
        const trophy = new Sprite({
            resource: resources.images.trophy1,
            frameSize: new Vector2(234, 233),
            hFrames: 1,
            vFrames: 1,
            frame: 1,
            scale: 2,
        })
        const heart = new Sprite({
            resource: resources.images.heart1,
            frameSize: new Vector2(354, 354),
            hFrames: 1,
            vFrames: 1,
            frame: 1,
            scale: 1.7,
        })
        const pet = new Sprite({
            resource: resources.images.pet1,
            frameSize: new Vector2(178, 178),
            hFrames: 1,
            vFrames: 1,
            frame: 1,
            scale: 1.7,
        })
        const popup = new EnhancedSprite(
            new Sprite({
                resource: resources.images.popup,
                frameSize: new Vector2(939, 485),
                hFrames: 1,
                vFrames: 1,
                frame: 1,
                scale: 2,
            }),
            "Plant has been added \n to your inventory"
        );
        
        const feed = new EnhancedSprite(pet, "You have fed the guinea pig");

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
        let sound = music;
        let rando = 0;
        let pop = false;
        let feedPop = false;
        let plant = havePlant;

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

            if (!light && main) { rooms[currentRoom].background.resource = plant ? resources.images.unlit : resources.images.plant; }

            count += 1;

            if (count < 25) {
                animation = true;
                if (light && main) {rooms[currentRoom].background.resource = resources.images.lit1;}
                if (sound) {radio.resource = resources.images.radio1;} else {radio.resource = resources.images.radio2;}
                trophy.resource = rando < 0.5 ? resources.images.trophy1 : resources.images.trophy3;
                heart.resource = rando < 0.5 ? resources.images.heart1 : resources.images.heart3;
                pet.resource = rando < 0.5 ? resources.images.pet1 : resources.images.pet3;
            } else {
                animation = false;
                if (light && main) {rooms[currentRoom].background.resource = resources.images.lit2;}
                if (sound) {radio.resource = resources.images.radio2;}
                trophy.resource = resources.images.trophy2;
                heart.resource = resources.images.heart2;
                pet.resource = resources.images.pet2;
                if (count > 50) { count = 0; rando = Math.random();}
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
                console.log(pos);
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

                // Plant
                x = (pos.x < 2300 && pos.x > 2200) ? true : false;
                y = (pos.y < 1600 && pos.y > 1450) ? true : false;
                if (x && y && !plant) {
                    pop = true;
                    plant = true;
                    setPlant(plant);
                }
                
                if (!main) {
                    // Radio
                    x = (pos.x < 2610 && pos.x > 2550) ? true : false;
                    y = (pos.y < 1110 && pos.y > 820) ? true : false;
                    if (x && y) {
                        sound = !sound;
                        setMusic(sound);
                    }

                    // Trophy
                    x = (pos.x < 850 && pos.x > 600) ? true : false;
                    y = (pos.y < 840 && pos.y > 800) ? true : false;
                    if (x && y) {
                        navigate('/achievements/research');
                    }

                    // Heart
                    x = (pos.x < 1750 && pos.x > 1640) ? true : false;
                    y = (pos.y < 840 && pos.y > 800) ? true : false;
                    if (x && y) {
                        navigate('/achievements/volunteer');
                    }

                    // Pet
                    x = (pos.x < 2300 && pos.x > 2130) ? true : false;
                    y = (pos.y < 840 && pos.y > 800) ? true : false;
                    if (x && y) {
                        if (plant) { feedPop = true; } else { navigate('/achievements/pet'); }
                        plant = false;
                        setPlant(plant);
                    }
                }
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            rooms[currentRoom].background.drawImage(ctx, -camera.x, -camera.y);      
            if (!main) {
                trophy.drawImage(ctx, 610 - camera.x, 400 - camera.y);
                heart.drawImage(ctx, 1600 - camera.x, 320 - camera.y);
                pet.drawImage(ctx, 2800 - camera.x, 500 - camera.y);
                radio.drawImage(ctx, 3800 - camera.x, 970 - camera.y);
            }
            frisk.drawImage(ctx, pos.x, pos.y);
            if (pop) {
                popup.drawImage(ctx, 700, 350);
                setTimeout(() => {
                    pop = false;
                }, 1500)
            }
            if (feedPop) {
                feed.drawImage(ctx, 700, 350);
                setTimeout(() => {
                    feedPop = false;
                }, 1500)
            }
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
            {music && <Music />}
        </canvas>
    );
};

export default Game;
