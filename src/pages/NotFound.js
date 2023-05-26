import * as THREE from "three";
import { useEffect, useRef } from "react";

const NotFound = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });

    const pixelRatio = window.devicePixelRatio || 1;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(pixelRatio);

    renderer.setSize(window.innerWidth, window.innerHeight);

    const loader = new THREE.TextureLoader();
    const texture = loader.load(
      "/anime_art_style_humanoid-cat-pirate_navigating_thr.jpg"
    );
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

    function handleMouseMove(event) {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function animate() {
      requestAnimationFrame(animate);

      //up and down linear interpolation on  mouse move
      const targetRotationX = mouseRef.current.y * 0.2;
      scene.rotation.x += (-targetRotationX - scene.rotation.x) * 0.05;

      //left and right linear interpolation on mouse move
      const targetRotationY = mouseRef.current.x * 0.2;
      scene.rotation.y += (targetRotationY - scene.rotation.y) * 0.05;

      //rotates the screen
      camera.rotation.y += -0.003;

      renderer.render(scene, camera);
    }

    animate();

    // Event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up event listener
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: "fixed", width: "100vw", height: "100vh" }}>
      <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0 }} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1>404</h1>
        <p>Sorry Anime Not Found...</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
          Return from whence you came
        </button>
      </div>
    </div>
  );
};

export default NotFound;
