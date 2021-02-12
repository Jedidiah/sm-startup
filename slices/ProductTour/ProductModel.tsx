import { TProductTourItem } from "./ProductTour";
import { Canvas } from "react-three-fiber";
import React from "react";
import { config } from "react-spring";
import { animated as animatedThree, useSpring } from "react-spring/three";

export default function ProductModel({
  rotationX = 0,
  rotationY = 0,
  rotationZ = 0,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  scale = 1,
}: TProductTourItem) {
  const objectProps = useSpring({
    scale: [scale, scale, scale],
    rotation: [rotationX, rotationY, rotationZ],
    position: [translateX, translateY, translateZ],
    config: config.gentle,
  });

  return (
    <Canvas style={{ flexGrow: 1, flexBasis: "70%", minHeight: "70vh" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <animatedThree.mesh {...objectProps}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"orange"} />
      </animatedThree.mesh>
    </Canvas>
  );
}
