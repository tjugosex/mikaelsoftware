import React, { useRef, useState, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from 'three'
function Floor(props) {
  const [clicked, setClicked] = useState(false);
  const boxRef = useRef();
  const vec = new THREE.Vector3();
  var hej = 0
  const texture = new THREE.TextureLoader().load( '/erik.png' );
  const material = new THREE.MeshBasicMaterial( { map: texture } );
  useFrame(state => {
    state.camera.lookAt(boxRef.current.position)
    if (clicked && hej<500) {
      state.camera.lookAt(boxRef.current.position)
      state.camera.position.y += 0.01;
      state.camera.position.x -= 0.02;
      state.camera.position.z += 0.02;
      hej +=1
      
    }
    
  });
  return (
    <mesh {...props} ref={boxRef} texture={texture} recieveShadow={true} castShadow={true} onClick={() => setClicked(true)}>
      <boxBufferGeometry args={[10, 1, 10]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Floor;
