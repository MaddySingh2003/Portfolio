import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, particles, torusKnot;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const init = () => {
      // Scene setup
      scene = new THREE.Scene();
      // Background color matches deep dark AI aesthetic
      scene.background = new THREE.Color(0x030305);
      scene.fog = new THREE.FogExp2(0x030305, 0.001);

      // Camera setup
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
      camera.position.z = 800;

      // Group to hold our objects so we can rotate them together based on mouse
      const group = new THREE.Group();
      scene.add(group);

      // 1. Torus Knot Wireframe
      const geometry = new THREE.TorusKnotGeometry(250, 80, 100, 16);
      const wireframeMaterial = new THREE.LineBasicMaterial({ 
        color: 0x4a4a4a, // Subtle grey/wireframe color like in the image
        transparent: true,
        opacity: 0.3 
      });
      const wireframe = new THREE.LineSegments(
        new THREE.WireframeGeometry(geometry), 
        wireframeMaterial
      );
      torusKnot = wireframe;
      group.add(torusKnot);

      // 2. Flying Particles (Small yellow dots as requested)
      const particleGeo = new THREE.BufferGeometry();
      const particleCount = 1000;
      const posArray = new Float32Array(particleCount * 3);
      
      for(let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 1500;
      }
      
      particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particleMat = new THREE.PointsMaterial({
        size: 3,
        color: 0xffcc00, // Yellowish dots
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });
      
      particles = new THREE.Points(particleGeo, particleMat);
      group.add(particles);

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      if (mountRef.current) {
        mountRef.current.innerHTML = "";
        mountRef.current.appendChild(renderer.domElement);
      }

      // Event listeners
      document.addEventListener('mousemove', onDocumentMouseMove);
      window.addEventListener('resize', onWindowResize);
    };

    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth mouse follow
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      // Rotate torus knot slowly on its own
      if (torusKnot) {
        torusKnot.rotation.x += 0.002;
        torusKnot.rotation.y += 0.003;
      }

      // Rotate particles slowly
      if (particles) {
        particles.rotation.y += 0.001;
      }

      // Apply mouse movement parallax to the whole scene/camera
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0"></div>;
}
