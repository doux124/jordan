import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

function Model(props) {
  const { nodes, materials } = useGLTF('/models/cube.glb');
  return (
    <group {...props} dispose={null} scale={[0.015, 0.015, 0.015]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1.geometry}
        material={materials.blinn9SG}
        name="mesh1"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1_1.geometry}
        material={materials.blinn2SG}
        name="mesh2"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1_2.geometry}
        material={materials.blinn11SG}
        name="mesh3"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1_3.geometry}
        material={materials.blinn4SG}
        name="mesh4"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1_4.geometry}
        material={materials.blinn6SG}
        name="mesh5"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1_5.geometry}
        material={materials.blinn7SG}
        name="mesh6"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1_6.geometry}
        material={materials.blinn5SG}
        name="mesh7"
      />
    </group>
  );
}

useGLTF.preload('/models/cube.glb');

export default Model;
