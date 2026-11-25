"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

/* ── Laptop ─────────────────────────────────────────────── */
function Laptop() {
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (screenRef.current) {
      const mat = screenRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 1.8 + Math.sin(clock.getElapsedTime() * 1.5) * 0.3;
    }
  });

  // Screen opening angle: 110° from base → 20° past vertical (tilted back)
  const screenTilt = -0.35; // radians (~20° past vertical)

  return (
    <group>
      {/* ═══ BASE CHASSIS ═══ */}
      <mesh position={[0, 0.025, 0]}>
        <boxGeometry args={[1.5, 0.05, 1.0]} />
        <meshStandardMaterial
          color="#454560"
          metalness={0.65}
          roughness={0.35}
        />
      </mesh>

      {/* Front edge accent */}
      <mesh position={[0, 0.03, 0.51]}>
        <boxGeometry args={[1.48, 0.02, 0.02]} />
        <meshStandardMaterial color="#555575" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* ═══ TRACKPAD ═══ */}
      <mesh position={[0, 0.052, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.42, 0.26]} />
        <meshStandardMaterial color="#555570" metalness={0.75} roughness={0.25} />
      </mesh>
      {/* Trackpad border */}
      <mesh position={[0, 0.0515, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.195, 0.212, 4]} />
        <meshBasicMaterial color="#6a6a85" transparent opacity={0.4} />
      </mesh>

      {/* ═══ KEYBOARD — 5 rows × 12 keys ═══ */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => (
          <mesh
            key={`key-${row}-${col}`}
            position={[
              -0.6 + col * 0.11,
              0.052,
              -0.3 + row * 0.1,
            ]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[0.085, 0.075]} />
            <meshBasicMaterial
              color={
                (row === 0 && col < 2) ? "#7e6bc4"    // accent keys
                : (row + col) % 7 === 0 ? "#6b5faa"   // highlight keys
                : "#525270"                             // normal keys
              }
            />
          </mesh>
        ))
      )}

      {/* ═══ SCREEN HINGE ═══ */}
      <mesh
        position={[0, 0.05, -0.49]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.022, 0.022, 1.3, 12]} />
        <meshStandardMaterial color="#404058" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* ═══ SCREEN ASSEMBLY — hinged at back edge ═══ */}
      <group position={[0, 0.05, -0.49]}>
        <group rotation={[screenTilt, 0, 0]}>
          {/* Screen lid (rear panel) */}
          <mesh position={[0, 0.5, -0.014]}>
            <boxGeometry args={[1.5, 0.98, 0.022]} />
            <meshStandardMaterial
              color="#3a3a52"
              metalness={0.6}
              roughness={0.4}
            />
          </mesh>

          {/* Bezel frame */}
          <mesh position={[0, 0.5, 0.0005]}>
            <planeGeometry args={[1.46, 0.94]} />
            <meshStandardMaterial color="#2a2a3e" metalness={0.3} roughness={0.6} />
          </mesh>

          {/* ═══ SCREEN DISPLAY — bright emissive purple ═══ */}
          <mesh ref={screenRef} position={[0, 0.5, 0.001]}>
            <planeGeometry args={[1.32, 0.82]} />
            <meshStandardMaterial
              color="#0e0820"
              emissive="#8b5cf6"
              emissiveIntensity={1.8}
              metalness={0}
              roughness={1}
            />
          </mesh>

          {/* ═══ CODE LINES on screen ═══ */}
          {[
            { y: 0.78, w: 0.45, c: "#c084fc", o: 0.85, x: -0.32 },
            { y: 0.72, w: 0.65, c: "#a78bfa", o: 0.75, x: -0.18 },
            { y: 0.66, w: 0.35, c: "#e9d5ff", o: 0.6,  x: -0.38 },
            { y: 0.60, w: 0.55, c: "#818cf8", o: 0.7,  x: -0.22 },
            { y: 0.54, w: 0.4,  c: "#c084fc", o: 0.65, x: -0.35 },
            { y: 0.48, w: 0.6,  c: "#a78bfa", o: 0.6,  x: -0.2  },
            { y: 0.42, w: 0.3,  c: "#e9d5ff", o: 0.5,  x: -0.4  },
            { y: 0.36, w: 0.5,  c: "#818cf8", o: 0.55, x: -0.25 },
            { y: 0.30, w: 0.42, c: "#c084fc", o: 0.5,  x: -0.33 },
            { y: 0.24, w: 0.55, c: "#a78bfa", o: 0.45, x: -0.22 },
          ].map((line, i) => (
            <mesh key={`code-${i}`} position={[line.x, line.y, 0.002]}>
              <planeGeometry args={[line.w, 0.025]} />
              <meshBasicMaterial
                color={line.c}
                transparent
                opacity={line.o}
              />
            </mesh>
          ))}

          {/* Line numbers column */}
          {Array.from({ length: 10 }).map((_, i) => (
            <mesh key={`ln-${i}`} position={[-0.6, 0.78 - i * 0.06, 0.002]}>
              <planeGeometry args={[0.04, 0.02]} />
              <meshBasicMaterial color="#6d5aad" transparent opacity={0.4} />
            </mesh>
          ))}

          {/* Webcam dot at top */}
          <mesh position={[0, 0.92, 0.002]}>
            <circleGeometry args={[0.012, 12]} />
            <meshBasicMaterial color="#2d2d44" />
          </mesh>
        </group>
      </group>
    </group>
  );
}

/* ── Platform ───────────────────────────────────────────── */
function Platform() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const mat = ringRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.3 + Math.sin(clock.getElapsedTime() * 0.8) * 0.08;
    }
  });

  return (
    <group>
      {/* Subtle platform disc — small, below the laptop */}
      <mesh position={[0, -0.005, 0.05]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.05, 1.05, 0.015, 48]} />
        <meshStandardMaterial
          color="#1f1f32"
          metalness={0.6}
          roughness={0.4}
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Animated purple rim ring */}
      <mesh
        ref={ringRef}
        position={[0, -0.002, 0.05]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[1.01, 1.07, 64]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

/* ── Floating Tech Labels ───────────────────────────────── */
const techLabels = [
  { text: "AI",  pos: [-1.4, 0.95, 0.8]  as [number, number, number], color: "#d8b4fe", size: 0.26 },
  { text: "ML",  pos: [1.5, 0.75, 0.3]   as [number, number, number], color: "#e9d5ff", size: 0.22 },
  { text: "Py",  pos: [1.3, 1.3, 0.8]    as [number, number, number], color: "#c4b5fd", size: 0.20 },
  { text: "</>", pos: [-1.2, 0.35, 0.2]  as [number, number, number], color: "#d8b4fe", size: 0.20 },
];

function FloatingLabels() {
  return (
    <>
      {techLabels.map((label) => (
        <Float
          key={label.text}
          speed={1.5}
          rotationIntensity={0.25}
          floatIntensity={0.5}
          floatingRange={[-0.08, 0.08]}
        >
          <group position={label.pos}>
            {/* Soft glow behind text */}
            <mesh>
              <sphereGeometry args={[0.22, 16, 16]} />
              <meshBasicMaterial
                color={label.color}
                transparent
                opacity={0.15}
              />
            </mesh>
            <Text
              fontSize={label.size}
              color={label.color}
              anchorX="center"
              anchorY="middle"
              fillOpacity={1}
              outlineWidth={0.008}
              outlineColor="#1a1025"
            >
              {label.text}
            </Text>
          </group>
        </Float>
      ))}
    </>
  );
}

/* ── Coffee Mug ─────────────────────────────────────────── */
function CoffeeMug() {
  return (
    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.25}>
      <group position={[1.0, 0.04, 0.55]} scale={0.16}>
        {/* Mug body */}
        <mesh>
          <cylinderGeometry args={[0.5, 0.45, 0.8, 16]} />
          <meshStandardMaterial
            color="#504078"
            metalness={0.4}
            roughness={0.5}
            emissive="#2d1b4e"
            emissiveIntensity={0.1}
          />
        </mesh>
        {/* Handle */}
        <mesh position={[0.55, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.2, 0.05, 8, 16, Math.PI]} />
          <meshStandardMaterial
            color="#504078"
            metalness={0.4}
            roughness={0.5}
          />
        </mesh>
        {/* Liquid surface */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.44, 0.44, 0.08, 16]} />
          <meshStandardMaterial
            color="#2a1545"
            emissive="#7c3aed"
            emissiveIntensity={0.12}
            metalness={0.2}
            roughness={0.8}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ── Particles ──────────────────────────────────────────── */
function Particles({ count = 40 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 5,
          Math.random() * 3 - 0.5,
          (Math.random() - 0.5) * 4,
        ] as [number, number, number],
        speed: 0.2 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
        scale: 0.012 + Math.random() * 0.025,
      });
    }
    return temp;
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const time = clock.getElapsedTime();
    const dummy = new THREE.Object3D();

    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.sin(time * p.speed + p.offset) * 0.3,
        p.position[1] + Math.cos(time * p.speed * 0.7 + p.offset) * 0.2,
        p.position[2]
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#c084fc" transparent opacity={0.5} />
    </instancedMesh>
  );
}

/* ── Lighting ───────────────────────────────────────────── */
function Lighting() {
  return (
    <>
      {/* Ambient — base visibility */}
      <ambientLight intensity={0.6} color="#e8e0ff" />

      {/* Hemisphere — natural sky/ground gradient */}
      <hemisphereLight args={["#c4b5fd", "#1a1025", 0.7]} />

      {/* Key light — white from front-right, reveals form */}
      <directionalLight
        position={[2, 3, 4]}
        intensity={1.0}
        color="#ede8ff"
      />

      {/* Fill light — softer from left side */}
      <directionalLight
        position={[-2, 2, 2]}
        intensity={0.4}
        color="#d4c8ff"
      />

      {/* Purple accent — upper left */}
      <pointLight
        position={[-2, 2.5, 2]}
        intensity={12}
        color="#a855f7"
        distance={10}
        decay={2}
      />

      {/* Violet accent — right side */}
      <pointLight
        position={[2.5, 1.5, 0]}
        intensity={8}
        color="#8b5cf6"
        distance={8}
        decay={2}
      />

      {/* Front purple — illuminates screen face */}
      <pointLight
        position={[0, 0.8, 3]}
        intensity={6}
        color="#c084fc"
        distance={8}
        decay={2}
      />

      {/* Rim light — behind scene for edge separation */}
      <pointLight
        position={[0, 1, -3]}
        intensity={5}
        color="#7c3aed"
        distance={8}
        decay={2}
      />
    </>
  );
}

/* ── Main Scene ─────────────────────────────────────────── */
export default function DevWorkspace({ isMobile = false }: { isMobile?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle mouse-follow camera effect (desktop only)
  useFrame(({ pointer }) => {
    if (groupRef.current && !isMobile) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.08,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointer.y * 0.04,
        0.05
      );
    }
  });

  return (
    <>
      <Lighting />
      <group ref={groupRef}>
        <Platform />
        <Laptop />
        <CoffeeMug />
        <FloatingLabels />
        <Particles count={isMobile ? 15 : 40} />
      </group>
    </>
  );
}
