import * as THREE from "three";
import { useEffect, useRef } from "react";

const NotFound = () => {
  const canvasRef = useRef(null);

  let mouseY = 0;
  let previousY = 0;
  const lerpFactor = 0.1;


  useEffect(() => {
    const canvas = canvasRef.current;

    // Adjust pixel ratio for improved rendering quality
    const pixelRatio = window.devicePixelRatio || 1;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(pixelRatio);

    const loader = new THREE.TextureLoader();
    const texture = loader.load("anime_art_style_a_hero_defeating_a_deamon_over_a_b.jpg");
    texture.minFilter = THREE.LinearFilter; // Set texture minFilter to LinearFilter for improved image quality

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

      // Rotate the scene or camera here
      scene.rotation.y += 0.003; // Rotating the scene along the y-axis

      renderer.render(scene, camera);
    }

    animate();

    return () => {  
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <h1>404</h1>
        <p>Sorry Anime Not Found...</p>
      </div>
    </div>
  );
};

export default NotFound;