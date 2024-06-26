import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import Timeline from "./Timeline";
import SecretDrawings from "./SecretDrawings";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { useEffect } from "react";

const Model = () => {
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

    const [showSecret, setShowSecret] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < -50) { // Adjust this threshold as needed
                setShowSecret(true);
            } else {
                setShowSecret(false);
            }
        };

        const handleTouchMove = (e) => {
            if (window.scrollY <= 0 && e.touches[0].clientY > window.touchStartY) {
                e.preventDefault();
                setShowSecret(true);
            }
        };

        const handleTouchStart = (e) => {
            window.touchStartY = e.touches[0].clientY;
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchstart', handleTouchStart);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);

    return (
        <section className="common-padding">
            <SecretDrawings />
            <div className="className={`main-content ${showSecret ? 'shifted' : ''}`}">
                <h1 id='heading' className="section-heading">
                    Timeline
                </h1>
                <Timeline/>
                <h1 id='heading' className="section-heading">
                    Click on the arcade machine's screen
                </h1>
                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                        <ModelView
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
            </div>
        </section>
    )
}

export default Model