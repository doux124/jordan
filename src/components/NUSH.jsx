import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/jordan/models/arcade.glb')
  return (
    <group {...props} dispose={null} scale={[0.45, 0.45, 0.45]}>
      <group position={[0, 1, 0]}>
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials['Material.002']}
          name="mesh3"
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials['Material.003']}
          name="mesh4"
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0.768, 2.757, -0.633]}
        rotation={[-0.766, 0, 0]}
        scale={0.056}
        name="mesh5"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0.506, 2.757, -0.633]}
        rotation={[-0.766, 0, 0]}
        scale={0.056}
        name="mesh6"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[0.638, 2.669, -0.726]}
        rotation={[-0.766, 0, 0]}
        scale={0.056}
        name="mesh7"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[0.637, 2.856, -0.543]}
        rotation={[-0.766, 0, 0]}
        scale={0.056}
        name="mesh8"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-0.715, 2.72, -0.587]}
        rotation={[-0.833, 0, 0]}
        scale={0.107}
        name="mesh9"
      />
    </group>
  )
}

useGLTF.preload('/jordan/models/arcade.glb')

export default Model
