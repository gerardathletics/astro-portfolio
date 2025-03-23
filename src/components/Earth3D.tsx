import React, { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import type { Mesh, Group } from 'three';
import { TextureLoader, AdditiveBlending, DoubleSide } from 'three';
import '../styles/Earth3D.css';

// Import textures
import earthDayMap from '../assets/textures/2k_earth_daymap.jpg';
import earthClouds from '../assets/textures/2k_earth_clouds.jpg';

// Loading component
function Loader() {
    return (
        <div className="earth-loading">
            <div className="loading-spinner"></div>
        </div>
    );
}

interface Location {
    position: [number, number, number];
    name: string;
    description: string;
    color: string;
}

function LocationMarkers() {
    const groupRef = useRef<Group>(null);
    const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);

    // Key locations with descriptions
    const locations: Location[] = [
        {
            position: [0.65, 0.75, 0.2],
            name: 'Utrecht, Netherlands',
            description: 'Current Location • GIS Development',
            color: '#60a5fa',
        },
        {
            position: [-0.65, 0.5, 0.5],
            name: 'San Francisco, USA',
            description: 'Tech Innovation Hub • Client Projects',
            color: '#60a5fa',
        },
        {
            position: [0.1, 0.85, 0.5],
            name: 'London, UK',
            description: 'European Projects • Spatial Analysis',
            color: '#60a5fa',
        },
        {
            position: [0.7, -0.6, 0.3],
            name: 'Sydney, Australia',
            description: 'Remote Collaboration • Web Mapping',
            color: '#60a5fa',
        },
        {
            position: [-0.3, -0.5, 0.8],
            name: 'Rio de Janeiro, Brazil',
            description: 'Environmental Projects • Data Visualization',
            color: '#60a5fa',
        },
    ];

    useFrame(({ clock }) => {
        if (groupRef.current) {
            locations.forEach((_, index) => {
                const marker = groupRef.current?.children[index];
                if (marker && index !== hoveredMarker) {
                    marker.scale.y = 1 + Math.sin(clock.getElapsedTime() * 2 + index) * 0.2;
                }
            });
        }
    });

    return (
        <group ref={groupRef}>
            {locations.map((loc, index) => (
                <group key={index} position={loc.position}>
                    {/* Marker point */}
                    <mesh onPointerOver={() => setHoveredMarker(index)} onPointerOut={() => setHoveredMarker(null)} scale={hoveredMarker === index ? [1.5, 1.5, 1.5] : [1, 1, 1]}>
                        <sphereGeometry args={[0.02, 16, 16]} />
                        <meshBasicMaterial color={loc.color} />
                    </mesh>

                    {/* Glow ring */}
                    <mesh rotation-x={Math.PI / 2}>
                        <ringGeometry args={[0.025, 0.035, 32]} />
                        <meshBasicMaterial color={loc.color} transparent opacity={0.4} />
                    </mesh>

                    {/* Location info */}
                    {hoveredMarker === index && (
                        <Html center position={[0, 0.1, 0]}>
                            <div className="marker-tooltip">
                                <h3>{loc.name}</h3>
                                <p>{loc.description}</p>
                            </div>
                        </Html>
                    )}
                </group>
            ))}
        </group>
    );
}

function Globe() {
    const earthRef = useRef<Mesh>(null);
    const cloudsRef = useRef<Mesh>(null);
    const glowRef = useRef<Mesh>(null);

    // Load Earth textures
    const [earthTexture, cloudsTexture] = useLoader(TextureLoader, [earthDayMap.src, earthClouds.src]);

    useFrame(({ clock }) => {
        if (earthRef.current && cloudsRef.current && glowRef.current) {
            // Rotate Earth and clouds at slightly different speeds
            earthRef.current.rotation.y = clock.getElapsedTime() * 0.05;
            cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.055;
            glowRef.current.rotation.y = clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <>
            {/* Atmosphere glow */}

            {/* Earth sphere */}
            <Sphere ref={earthRef} args={[1.8, 64, 64]}>
                <meshStandardMaterial map={earthTexture} metalness={0.1} roughness={0.7} emissive="#4a9eff" emissiveIntensity={0.4} />
            </Sphere>

            {/* Clouds layer */}
            <Sphere ref={cloudsRef} args={[1.801, 64, 64]}>
                <meshStandardMaterial map={cloudsTexture} transparent={true} opacity={0.8} depthWrite={false} blending={AdditiveBlending} side={DoubleSide} />
            </Sphere>

            {/* Location markers */}
            <LocationMarkers />
        </>
    );
}

export default function Earth3D() {
    return (
        <div className="earth-container">
            <Suspense fallback={<Loader />}>
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
                    <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4a9eff" />
                    <Globe />
                    <OrbitControls
                        enableZoom={false}
                        autoRotate
                        autoRotateSpeed={0.1}
                        enablePan={false}
                        rotateSpeed={0.4}
                        minPolarAngle={Math.PI / 2.5}
                        maxPolarAngle={Math.PI / 1.8}
                    />
                </Canvas>
            </Suspense>
        </div>
    );
}
