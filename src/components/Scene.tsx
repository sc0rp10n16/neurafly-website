"use client"

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GLTFModel from './Drone';

export default function Scene() {
  return (
    <div >
      <Canvas camera={{ position: [0, -2, 9], fov: 50 }}>
        
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
             minDistance={0} // Minimum zoom distance
             maxDistance={5} // Maximum zoom distance
        />
        <GLTFModel 
            
            />
      </Canvas>
    </div>
  );
}
