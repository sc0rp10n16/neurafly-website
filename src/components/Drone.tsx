import React, { useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { useAnimations } from '@react-three/drei';

const GLTFModel = ({ url, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1,1,1] }) => {
  const gltf = useLoader(GLTFLoader, url);
  const { animations } = gltf;
  const { actions, names } = useAnimations(animations, gltf.scene);
  const gltfRef = useRef();

  useEffect(() => {
    if (actions && names.length > 0) {
      actions[names[1]].play(); // Play the first animation by default
    }
  }, [actions, names]);

  useFrame((state, delta) => {
    if (gltfRef.current) {
      gltfRef.current.rotation.y += delta * 1; // Adjust the speed as needed
    }
  });
  return <primitive
    ref = {gltfRef}
    object={gltf.scene} 
    position={position} 
    rotation={rotation}
    scale={scale}
    />;
};

export default GLTFModel;