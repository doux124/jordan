import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RingModel(props) {
  const { nodes, materials } = useGLTF('/jordan/models/ring.glb')
  return (
    <group {...props} dispose={null} scale={[0.078, 0.078, 0.078]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Annuloplasty_Mold_v7.geometry}
        material={nodes.Annuloplasty_Mold_v7.material}
      />
    </group>
  )
}

useGLTF.preload('/jordan/models/ring.glb')

export default RingModel