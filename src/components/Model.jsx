import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import Raycaster from "./Raycaster";
import { useRef, useState, useEffect, useCallback } from "react";
import * as THREE from "three";
import { yellowImg } from "../utils";
import { Canvas, useThree } from "@react-three/fiber";
import { View } from "@react-three/drei";

const Model = () => {
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

    // GSAP
    useGSAP(() => {
        gsap.to("#heading", { y: 0, opacity: 1})
    }, [])

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <h1 id='heading' className="section-heading">
                    Welcome.
                </h1>
                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                        <ModelView
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
            </div>
        </section>
    )
}

export default Model