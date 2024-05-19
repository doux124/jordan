import { useRef, useState, useEffect, useCallback } from "react";
import * as THREE from "three";
import { yellowImg } from "../utils";
import { Canvas, useThree } from "@react-three/fiber";
import { View } from "@react-three/drei";
import RingView from "./RingView";

const Ring = () => {
    // Model
    const[model, setModel] = useState({
        title: "Test",
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg, //Texture
    })

    // Camera Control
    const cameraControl = useRef();

    // Model Tracking
    const track = useRef(new THREE.Group());

    // Rotation
    const [rotation, setRotation] = useState(0);

    return (
        <div className="flex flex-col items-center pt-5">
            <div className="w-[30vh] h-[30vh] md:h-[20vh] overflow-hidden relative">
                <RingView
                    index={1}
                    groupRef={track}
                    gsapType="view1"
                    controlRef={cameraControl}
                    setRotationState={setRotation}
                    item={model}   
                />

                <Canvas 
                    className="w-full -full" 
                    style={{
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        overflow: 'hidden',
                    }}
                    eventSource={document.getElementById('root')}
                >
                    <View.Port />
                </Canvas>
            </div>
        </div>
    )
}

export default Ring