import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/models/arcade.glb')
  return (
    <group {...props} dispose={null} scale={[0.5, 0.5, 0.5]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.Material}
        name="mesh1"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials['Material.001']}
        name="mesh2"
      />
    </group>
  )
}

useGLTF.preload('/models/arcade.glb')

export default Model