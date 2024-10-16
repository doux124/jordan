// Rooms.js
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./Vector2.js";
import { resources } from "./Resource.js";

const rooms = {
    mainRoom: {
        width: 3200,
        height: 1800,
        background: new Sprite({
            resource: resources.images.unlit,
            frameSize: new Vector2(3200, 1800),
            scale: 2
        }),
        walls: [
            { x1: 420, y1: 170, x2: 520, y2: 1270 },
            { x1: 520, y1: -250, x2: 700, y2: 270 },
            { x1: 2514, y1: 370, x2: 2524, y2: 770 },
            { x1: 1044, y1: -250, x2: 1354, y2: 270 },
            { x1: 1334, y1: 270, x2: 2574, y2: 350 },
            { x1: 520, y1: 1470, x2: 2680, y2: 1480 },
            { x1: 2514, y1: 1380, x2: 3220, y2: 1580 },
            { x1: 2514, y1: 820, x2: 3220, y2: 830 },
            { x1: 840, y1: 980, x2: 1540, y2: 1080 },
            { x1: 1130, y1: 810, x2: 1220, y2: 820 },
        ]
    },
    longRoom: {
        width: 6000,
        height: 1800,
        background: new Sprite({
            resource: resources.images.longroom,
            frameSize: new Vector2(6000, 1800),
            scale: 2
        }),
        walls: [
            { x1: 50, y1: 820, x2: 2990, y2: 830 },
            { x1: 50, y1: 1380, x2: 2990, y2: 1390 },     
            { x1: 2830, y1: 820, x2: 3060, y2: 1390 },  
        ]
    }
};

export default rooms;
