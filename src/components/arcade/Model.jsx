import ModelView from "./ModelView";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

const Model = () => {
    // Camera Control
    const cameraControl = useRef();

    // Model Tracking
    const track = useRef(new THREE.Group());

    // Rotation
    const [rotation, setRotation] = useState(0);

    return (
        <div className="flex flex-col items-center mt-5">
            <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                <ModelView
                    groupRef={track}
                    gsapType="view1"
                    controlRef={cameraControl}
                    setRotationState={setRotation}
                />

                <Canvas
                    className="w-full h-full"
                    style={{
                        position: 'relative',
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
    );
}

export default Model;
