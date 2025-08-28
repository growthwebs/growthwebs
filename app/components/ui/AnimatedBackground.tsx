'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function AnimatedBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 15

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create flowing gradient mesh
    const createFlowingGradient = () => {
      const geometry = new THREE.PlaneGeometry(40, 40, 32, 32)
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          mouse: { value: new THREE.Vector2(0, 0) },
          resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec2 mouse;
          uniform vec2 resolution;
          varying vec2 vUv;
          
          void main() {
            vec2 uv = vUv;
            
            // Create flowing gradient effect
            float flow = sin(uv.x * 10.0 + time * 0.5) * 0.5 + 0.5;
            flow += sin(uv.y * 8.0 + time * 0.3) * 0.5 + 0.5;
            
            // Add mouse interaction
            float mouseDist = distance(uv, mouse);
            float mouseEffect = smoothstep(0.3, 0.0, mouseDist);
            
            // Create color gradient
            vec3 color1 = vec3(0.42, 0.79, 0.97); // #6bcaf8
            vec3 color2 = vec3(0.29, 0.56, 0.89); // #4a90e2
            vec3 color3 = vec3(0.1, 0.1, 0.3);    // Dark blue
            
            vec3 finalColor = mix(color1, color2, flow);
            finalColor = mix(finalColor, color3, 0.7);
            finalColor += mouseEffect * 0.2;
            
            gl_FragColor = vec4(finalColor, 0.15);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })

      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)
      return { mesh, material, geometry }
    }

    // Create animated particles
    const createAnimatedParticles = () => {
      const particleCount = 200
      const positions = new Float32Array(particleCount * 3)
      const velocities = new Float32Array(particleCount * 3)
      const sizes = new Float32Array(particleCount)

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 40
        positions[i * 3 + 1] = (Math.random() - 0.5) * 40
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20

        velocities[i * 3] = (Math.random() - 0.5) * 0.02
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01

        sizes[i] = Math.random() * 0.1 + 0.02
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

      const material = new THREE.PointsMaterial({
        size: 1,
        transparent: true,
        opacity: 0.6,
        color: 0x6bcaf8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
      })

      const particles = new THREE.Points(geometry, material)
      scene.add(particles)
      return { particles, geometry, material, positions, velocities }
    }

    // Create floating geometric elements
    const createFloatingElements = (): THREE.Mesh[] => {
      const elements: THREE.Mesh[] = []
      const geometries = [
        new THREE.TorusGeometry(1, 0.3, 8, 16),
        new THREE.OctahedronGeometry(0.6),
        new THREE.TetrahedronGeometry(0.8),
        new THREE.IcosahedronGeometry(0.5)
      ]

      geometries.forEach((geo, index) => {
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color(0x6bcaf8),
          transparent: true,
          opacity: 0.08,
          wireframe: true
        })

        const mesh = new THREE.Mesh(geo, material)
        mesh.position.set(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20
        )
        mesh.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        )

        scene.add(mesh)
        elements.push(mesh)
      })

      return elements
    }

    // Create wave effect
    const createWaveEffect = () => {
      const geometry = new THREE.PlaneGeometry(50, 50, 50, 50)
      const material = new THREE.MeshBasicMaterial({
        color: 0x6bcaf8,
        transparent: true,
        opacity: 0.05,
        wireframe: true,
        side: THREE.DoubleSide
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.rotation.x = -Math.PI / 2
      scene.add(mesh)
      return { mesh, geometry, material }
    }

    // Initialize all elements
    const flowingGradient = createFlowingGradient()
    const animatedParticles = createAnimatedParticles()
    const floatingElements = createFloatingElements()
    const waveEffect = createWaveEffect()

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)
      timeRef.current += 0.016

      // Update flowing gradient
      if (flowingGradient.material.uniforms) {
        flowingGradient.material.uniforms.time.value = timeRef.current
        flowingGradient.material.uniforms.mouse.value.set(mouseRef.current.x, mouseRef.current.y)
      }

      // Update particles
      const positions = animatedParticles.positions
      const velocities = animatedParticles.velocities
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i]
        positions[i + 1] += velocities[i + 1]
        positions[i + 2] += velocities[i + 2]

        // Wrap particles
        if (Math.abs(positions[i]) > 20) positions[i] *= -0.9
        if (Math.abs(positions[i + 1]) > 20) positions[i + 1] *= -0.9
        if (Math.abs(positions[i + 2]) > 10) positions[i + 2] *= -0.9
      }
      animatedParticles.geometry.attributes.position.needsUpdate = true

      // Update floating elements
      floatingElements.forEach((element, index) => {
        element.rotation.x += 0.002 * (index + 1)
        element.rotation.y += 0.003 * (index + 1)
        element.position.y += Math.sin(timeRef.current + index) * 0.002
        element.position.x += Math.cos(timeRef.current + index * 0.5) * 0.002
      })

      // Update wave effect
      const wavePositions = waveEffect.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < wavePositions.length; i += 3) {
        const x = wavePositions[i]
        const y = wavePositions[i + 1]
        wavePositions[i + 2] = Math.sin(x * 0.5 + timeRef.current) * 0.5 + 
                               Math.sin(y * 0.5 + timeRef.current * 0.7) * 0.3
      }
      waveEffect.geometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      
      if (flowingGradient.material.uniforms?.resolution) {
        flowingGradient.material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight)
      }
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      // Clean up all geometries and materials
      flowingGradient.geometry.dispose()
      flowingGradient.material.dispose()
      animatedParticles.geometry.dispose()
      animatedParticles.material.dispose()
      waveEffect.geometry.dispose()
      waveEffect.material.dispose()
      
      floatingElements.forEach(element => {
        element.geometry.dispose()
        if (Array.isArray(element.material)) {
          element.material.forEach(mat => mat.dispose())
        } else {
          element.material.dispose()
        }
      })
      
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  )
}
