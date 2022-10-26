import React, { useRef } from "react";
import { Canvas, useThree, useFrame  } from "@react-three/fiber";
function Box(props) {

  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={boxRef} recieveShadow={true} castShadow={true} >
      <torusBufferGeometry args={[ 1, 0.1, 20, 100 ]} />
      <meshPhysicalMaterial  color={"gold"} />
    </mesh>
  );
}
export default Box;
