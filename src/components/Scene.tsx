"use client"

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GLTFModel from './Drone';

export default function Scene() {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center text-center'>
      <Canvas  camera={{ position: [0, -2, 9], fov: 50 }}>
        
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
             minDistance={0} // Minimum zoom distance
             maxDistance={5} // Maximum zoom distance
        />
        <GLTFModel 
            
            />
            
      </Canvas>
      <p className='bottom-0 mt-20'>Scroll down to know more</p>
    </div>
  );
}
