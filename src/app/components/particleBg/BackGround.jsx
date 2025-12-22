"use client";

// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";
// import { useCallback } from "react";
// import particleconfig from "../particleconfig/Particleconfig";

// export default function BackGround({ children }) {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <>
//       <Particles
//         id="tsparticles"
//         options={particleconfig}
//       />
//       <div className="relative z-10">{children}</div>
//     </>
//   );
// }
import React from 'react'
import LiquidEther from './LiquidEther'


export default function BackGround({ children }) {
  return (
    <>
    <div className='fixed' style={{ width: '100%', height: '100%', position: 'absolute' }}>
  <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous={false}
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
  />

</div>
<div>{children}</div>
    </>
  )
}

