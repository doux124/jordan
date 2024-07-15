import { useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import NUSH from "./NUSH";
import { useNavigate } from 'react-router-dom';

const Raycaster = () => {
    const { scene, camera } = useThree();
    const raycaster = new THREE.Raycaster();
    const navigate = useNavigate();

    const handleMouseDown = useCallback((event) => {
        const mouse = new THREE.Vector2(
            (event.clientX / window.innerWidth) * 2 - 1, 
            -(event.clientY / window.innerHeight) * 2 + 1
        );

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        // Interactable
        if (intersects.length > 0) {
            intersects.forEach(intersect => {
                const object = intersect.object.name;
                console.log(object);
                const rect = document.body.getBoundingClientRect();
                const docHeight = document.body.scrollHeight;
                const mouseY = (event.clientY - rect.top) / docHeight;
                console.log(mouseY)
                if (object === "mesh3" && mouseY > .8) {
                    navigate('/achievements');
                }
            });
        }
    }, [camera, scene]);

    useEffect(() => {
        window.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, [handleMouseDown]);

    return (
        <>
            <NUSH />
        </>
    );
};

export default Raycaster;
