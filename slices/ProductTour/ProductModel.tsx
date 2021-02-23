import { jsx } from "@emotion/react";
import { TProductTourItem } from "./ProductTour";
import { Canvas } from "react-three-fiber";
import React, { Suspense, useRef } from "react";
import { config } from "react-spring";
import { animated as animatedThree, useSpring } from "react-spring/three";
import { productTourStyles } from "./productTourStyles";
import useComponentSize from "@rehooks/component-size";
import { Center, OrbitControls, Shadow, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

function BirdHouse(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/housemodel.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials["default"]} geometry={nodes.House.geometry} />
      <mesh material={materials["default"]} geometry={nodes.Roof.geometry} />
      <mesh material={materials["default"]} geometry={nodes.Perch.geometry} />
    </group>
  );
}

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

  const ref = useRef(null);
  const size = useComponentSize(ref);
  // const { nodes, materials } = useGLTF("./BoomBox.glb");
  // console.log({ nodes, materials });

  return (
    <div ref={ref} css={productTourStyles.canvasContainer}>
      <Canvas style={size}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <Suspense fallback={null}>
          <animatedThree.group {...objectProps}>
            <BirdHouse />
          </animatedThree.group>
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/housemodel.glb");
