"use client"; // Ensure this is a client component

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { getFresnelMat } from './utils/getFresnelMat';
import getStarfield from './utils/getStarField';

export default function Globe() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    // Append the renderer element only on the client side
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = -23.4 * Math.PI / 180;
    scene.add(earthGroup);

    new OrbitControls(camera, renderer.domElement);

    const detail = 12;
    const loader = new THREE.TextureLoader();

    const material = new THREE.MeshPhongMaterial({
      map: loader.load('/textures/earthmap.jpg'),
      specularMap: loader.load('/textures/specularmap.jpg'),
      bumpMap: loader.load('/textures/bumpmap.jpg'),
      bumpScale: 0.04,
    });
    const earthMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1, detail), material);
    earthGroup.add(earthMesh);

    const lightsMat = new THREE.MeshBasicMaterial({
      map: loader.load('/textures/lightsmap.jpg'),
      blending: THREE.AdditiveBlending,
    });
    const lightsMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1, detail), lightsMat);
    earthGroup.add(lightsMesh);

    const cloudsMat = new THREE.MeshStandardMaterial({
      map: loader.load('/textures/cloudsmap.jpg'),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      alphaMap: loader.load('/textures/cloudstransmap.jpg'),
    });
    const cloudsMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1, detail), cloudsMat);
    cloudsMesh.scale.setScalar(1.003);
    earthGroup.add(cloudsMesh);

    const fresnelMat = getFresnelMat();
    const glowMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1, detail), fresnelMat);
    glowMesh.scale.setScalar(1.01);
    glowMesh.material.transparent = true;
    glowMesh.material.opacity = 0.5;
    earthGroup.add(glowMesh);

    const stars = getStarfield({ numStars: 2000 });
    scene.add(stars);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(-2, 0.5, 1.5);
    scene.add(sunLight);

    let animationFrameId;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.002;
      lightsMesh.rotation.y += 0.002;
      cloudsMesh.rotation.y += 0.0023;
      glowMesh.rotation.y += 0.002;
      stars.rotation.y -= 0.0002;
      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId); // Stop the animation loop
      window.removeEventListener('resize', handleResize); // Remove event listener

      earthMesh.geometry.dispose();
      earthMesh.material.dispose();
      lightsMesh.geometry.dispose();
      lightsMesh.material.dispose();
      cloudsMesh.geometry.dispose();
      cloudsMesh.material.dispose();
      glowMesh.geometry.dispose();
      glowMesh.material.dispose();
      stars.geometry.dispose();
      stars.material.dispose();

      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full"></div>;
}
