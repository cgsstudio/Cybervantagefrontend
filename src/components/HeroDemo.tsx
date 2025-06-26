import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Fix for missing types for 'aos' in TypeScript
// Remove this if you install @types/aos
declare module 'aos';

const HeroDemo = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (rect) {
        mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3D Scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create sphere geometry with gradient-like effect
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    
    // Create a custom shader material for gradient effect
    const sphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 1.0 }
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        uniform float time;
        void main() {
          // Create gradient from orange to purple based on position
          float gradient = (vPosition.x + 2.0) / 4.0; // normalize to 0-1
          vec3 orange = vec3(1.0, 0.42, 0.0); // #ff6b00
          vec3 purple = vec3(0.58, 0.2, 0.92); // #9333ea
          vec3 color = mix(orange, purple, gradient);
          gl_FragColor = vec4(color, 0.3);
        }
      `,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Create network nodes with gradient colors
    const nodes = [];
    const nodeGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    
    // Generate random positions on sphere surface
    for (let i = 0; i < 50; i++) {
      const phi = Math.acos(-1 + (2 * i) / 50);
      const theta = Math.sqrt(50 * Math.PI) * phi;
      
      const x = 2.2 * Math.cos(theta) * Math.sin(phi);
      const y = 2.2 * Math.sin(theta) * Math.sin(phi);
      const z = 2.2 * Math.cos(phi);
      
      // Create gradient color for nodes based on position
      const gradient = (x + 2.2) / 4.4; // normalize to 0-1
      const orange = new THREE.Color(0xff6b00);
      const purple = new THREE.Color(0x9333ea);
      const nodeColor = orange.clone().lerp(purple, gradient);
      
      const nodeMaterial = new THREE.MeshBasicMaterial({ color: nodeColor });
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(x, y, z);
      nodes.push(node);
      scene.add(node);
    }

    // Create network lines with gradient colors
    const lines = [];
    
    // Connect nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 2.5) {
          // Create gradient color for lines
          const midPoint = nodes[i].position.clone().add(nodes[j].position).multiplyScalar(0.5);
          const gradient = (midPoint.x + 2.2) / 4.4;
          const orange = new THREE.Color(0xff6b00);
          const purple = new THREE.Color(0x9333ea);
          const lineColor = orange.clone().lerp(purple, gradient);
          
          const lineMaterial = new THREE.LineBasicMaterial({ 
            color: lineColor, 
            transparent: true, 
            opacity: 0.4 
          });
          
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          lines.push(line);
          scene.add(line);
        }
      }
    }

    // Add particles with gradient colors
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      // Create gradient colors for particles
      const gradient = (positions[i3] + 5) / 10; // normalize to 0-1
      const orange = new THREE.Color(0xff6b00);
      const purple = new THREE.Color(0x9333ea);
      const particleColor = orange.clone().lerp(purple, gradient);
      
      colors[i3] = particleColor.r;
      colors[i3 + 1] = particleColor.g;
      colors[i3 + 2] = particleColor.b;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({ 
      size: 0.02,
      transparent: true,
      opacity: 0.6,
      vertexColors: true
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Position camera
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Very slow sphere rotation with mouse influence
      const baseRotationSpeed = 0.0005;
      sphere.rotation.x += baseRotationSpeed + (mouseRef.current.y * 0.005);
      sphere.rotation.y += baseRotationSpeed * 1.5 + (mouseRef.current.x * 0.005);
      
      // Rotate node positions very slowly
      nodes.forEach((node, index) => {
        const time = Date.now() * 0.0003; // Even slower animation
        node.rotation.x = time * 0.2 + index;
        node.rotation.y = time * 0.1 + index;
      });
      
      // Update line positions with very subtle animation
      lines.forEach((line, index) => {
        const positions = line.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.0003 + index) * 0.0003;
        }
        line.geometry.attributes.position.needsUpdate = true;
      });
      
      // Very slow particle rotation
      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.0005;
      
      // Add mouse influence to camera
      camera.position.x += (mouseRef.current.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      if (mountRef.current) {
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    animate();
    setIsLoaded(true);
    sceneRef.current = { scene, camera, renderer, nodes, lines, particles };

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden  bg-[#171717] pt-[80px] md:pt-0">
      {/* Two Column Layout */}
      <div className="relative z-20 h-full grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column - Content */}
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 lg:pl-16">
          <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} >
            <h1 className=" text-[40px] sm:text-[50px] md:text-[60px] lg:text-[75px] leading-normal font-bold text-white mb-4 md:mb-6 heading-h1-main heading-main hero-heading">
              Security from Every Angle, Protection in Every Layer
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-medium leading-relaxed">
              Uncompromising Security Tailored for Your Business from Code to Cloud with proven expertise and unmatched experience.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base sm:text-lg">
                Explore How We Help
              </button>
            </div>
              
           
          
            </div>
          </div>
        </div>
        
        {/* Right Column - 3D Sphere */}
        <div className="relative flex items-center justify-center min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-0 " style={{height: '100%', minHeight: '350px'}} data-aos="fade-left" data-aos-delay="200">
          <div 
            ref={mountRef} 
            className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl sphere-3d-responsive"
            style={{ filter: 'blur(0.5px)' }}
          />
          {/* Gradient overlay for sphere */}
          {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-950/20 pointer-events-none" /> */}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDemo;