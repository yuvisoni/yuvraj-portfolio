"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import DevWorkspace from "./DevWorkspace";

function SceneLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
    </div>
  );
}

/** Points the camera at the laptop center so the screen is clearly visible */
function CameraSetup() {
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(0, 0.3, 0);
    camera.updateProjectionMatrix();
  }, [camera]);
  return null;
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) setWebGLAvailable(false);
    } catch {
      setWebGLAvailable(false);
    }

    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) setWebGLAvailable(false);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!webGLAvailable) return null; // Fallback handled by parent

  return (
    <div className="w-full h-full relative">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/15 via-violet-500/8 to-transparent blur-3xl" />

      <Suspense fallback={<SceneLoader />}>
        <Canvas
          camera={{
            position: [1.0, 0.8, 3.8],
            fov: 44,
          }}
          dpr={[1, isMobile ? 1.5 : 2]}
          gl={{
            antialias: !isMobile,
            alpha: true,
            powerPreference: "default",
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.5,
          }}
          style={{ background: "transparent" }}
        >
          <CameraSetup />
          <DevWorkspace isMobile={isMobile} />
        </Canvas>
      </Suspense>
    </div>
  );
}
