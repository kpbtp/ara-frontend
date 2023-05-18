import * as THREE from "three";
import { useEffect, useRef } from "react";

const NotFound = () => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const renderer = new THREE.WebGLRenderer({ canvas });
  
      const loader = new THREE.TextureLoader();
      const texture = loader.load("anime_art_style_a_hero_defeating_a_deamon_over_a_b.jpg");
  
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 10, 0);
  
      const geometry = new THREE.SphereGeometry(500, 60, 40);
      geometry.scale(-1, 1, 1);
  
      const material = new THREE.MeshBasicMaterial({ map: texture });
  
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
  
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
  
      animate();
    }, []);
  
    return <canvas ref={canvasRef} />;
  };
  
  export default NotFound;