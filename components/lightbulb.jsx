import React from "react";

function LightBulb(props) {
  return (
    <mesh {...props} >
      <pointLight castShadow />
      
      <meshPhongMaterial emissive={"blue"}  />
    </mesh>
  );
}

export default LightBulb;