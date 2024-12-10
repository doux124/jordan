import { useRef, useState } from "react";
import { Group } from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import RingView from "./RingView";

const Ring = () => {
    // Camera Control
    const cameraControl = useRef();

    // Model Tracking
    const track = useRef(new Group());

    // Rotation
    const [rotation, setRotation] = useState(0);

    return (
        <div className="flex flex-col items-center pt-5">
            <div className="w-[30vh] h-[30vh] md:h-[20vh] overflow-hidden relative">
                <RingView
                    groupRef={track}
                    gsapType="view1"
                    controlRef={cameraControl}
                    setRotationState={setRotation}  
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