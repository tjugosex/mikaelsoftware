import React from "react";

function LightBulb(props) {
  return (
    <mesh {...props} >
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"blue"}  />
    </mesh>
  );
}

export default LightBulb;