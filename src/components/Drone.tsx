import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const Model = () => {
  const { scene, animations } = useGLTF('/drone.glb');
  const { actions, names } = useAnimations(animations, scene);
  const modelRef = useRef<Group>();

  useEffect(() => {
    const action = actions[names[1]];
    action?.play()
    
    return () => {
      action?.stop();
    };
  }, [actions, names]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 1; // Adjust the speed as needed
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1} position={[0, -2, -5]} />;
};

export default Model;