import * as THREE from 'three';
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF('/models/cube.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1.geometry}
        material={materials.blinn9SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1_1.geometry}
        material={materials.blinn2SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1_2.geometry}
        material={materials.blinn11SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1_3.geometry}
        material={materials.blinn4SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1_4.geometry}
        material={materials.blinn6SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1_5.geometry}
        material={materials.blinn7SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37_1_6.geometry}
        material={materials.blinn5SG}
      />
    </group>
  )
}

export default Model

useGLTF.preload('/models/cube.glb')