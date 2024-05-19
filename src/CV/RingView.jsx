import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from '../components/Lights';
import Loader from '../components/Loader';
import RingModel from './RingModel';
import { Suspense } from "react";

const RingView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={true}
        enablePan={true}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

      {/* Adjust the rotation of the group element */}
      <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0, -0.5, 0]} rotation={[Math.PI/2, Math.PI, 0]}>
        <Suspense fallback={<Loader />}>
          <RingModel />
        </Suspense>
      </group>
    </View>
  )
}

export default RingView;
