import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });

    const pixelRatio = window.devicePixelRatio || 1;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(pixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 0);

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    //choose random picture
    const loader = new THREE.TextureLoader();
    function randomNum(num) {
      return Math.floor(Math.random() * num) + 1;
    }
    //change num for the total number of pics
    const texture = loader.load(`/pic${randomNum(7)}.jpg`);
    texture.minFilter = THREE.LinearFilter;

    const material = new THREE.MeshBasicMaterial({ map: texture });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function handleMouseMove(event) {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function animate() {
      requestAnimationFrame(animate);

      const targetRotationX = mouseRef.current.y * 0.5;
      const targetRotationY = mouseRef.current.x * 0.5;

      rotationRef.current.x += (targetRotationX - rotationRef.current.x) * 0.05;
      rotationRef.current.y += (targetRotationY - rotationRef.current.y) * 0.05;

      camera.rotation.x = rotationRef.current.x;
      camera.rotation.y = -rotationRef.current.y;

      scene.rotation.y += 0.002;

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  //handleclicks for navigation
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoHome = () => {
    navigate("/");
  };

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
        <button
          onClick={() => handleGoBack()}
          className="bg-blue-500 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transform transition-all duration-500 ease-in-out hover:scale-110"
        >
          Go Back
        </button>

        <button
          onClick={() => handleGoHome()}
          className="bg-blue-500 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-blue-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-500 ease-in-out"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
