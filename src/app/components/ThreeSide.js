"use client";

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeScene = ({ modelPath, rotatePieces }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        modelRef.current = gltf.scene;

        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        gltf.scene.position.sub(center);

        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.material.metalness = 0.1;
          }
        });

        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        gltf.scene.scale.multiplyScalar(scale);

        scene.add(gltf.scene);
      },
      (progress) => {
        const percentage = (progress.loaded / progress.total) * 100;
        console.log("Chargement:", percentage.toFixed(2), "%");
      },
      (error) => {
        console.error("Erreur de chargement:", error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      if (modelRef.current) {
        const scrollPosition = window.scrollY;
        const rotationSpeed = Math.PI / 360;
        const maxRotation = Math.PI * 2;
        modelRef.current.rotation.y = (scrollPosition * rotationSpeed) % maxRotation;
        modelRef.current.rotation.y = ((scrollPosition * rotationSpeed) % maxRotation + Math.PI * 2) % (Math.PI * 2);
      }
      renderer.render(scene, camera);

      const firstPlanes = ["Plane1", "Plane2", "Plane3"];
      const secondPlanes = ["Plane4", "Plane5", "Plane6"];

      if (rotatePieces && modelRef.current) {
        const time = Date.now() * 0.002;

        modelRef.current.traverse((child) => {
          if (child.isMesh) {
            if (firstPlanes.includes(child.name)) {
              child.rotation.x = -0.2 + Math.sin(time) * 0.1;
            } else if (secondPlanes.includes(child.name)) {
              child.rotation.y = 0.2 - Math.sin(time) * -0.2;
            }
          }
        });
      }
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const width = window.innerWidth / 2;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [modelPath, rotatePieces]);

  return (
    <div ref={containerRef} className="w-[50dvw] h-[50dvh]" />
  );
};

export default ThreeScene;

