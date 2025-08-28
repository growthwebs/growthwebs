'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const particlesRef = useRef<THREE.Points[]>([])
  const geometriesRef = useRef<THREE.Mesh[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

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
    camera.position.z = 10

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

    // Create multiple particle systems for layered effect
    const createParticleSystem = (count: number, size: number, color: THREE.Color, speed: number, spread: number) => {
      const positions = new Float32Array(count * 3)
      const colors = new Float32Array(count * 3)
      const velocities = new Float32Array(count * 3)

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * spread
        positions[i * 3 + 1] = (Math.random() - 0.5) * spread
        positions[i * 3 + 2] = (Math.random() - 0.5) * spread

        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b

        velocities[i * 3] = (Math.random() - 0.5) * speed
        velocities[i * 3 + 1] = (Math.random() - 0.5) * speed
        velocities[i * 3 + 2] = (Math.random() - 0.5) * speed
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))

      const material = new THREE.PointsMaterial({
        size: size,
        vertexColors: true,
        transparent: true,
        opacity: 0.3, // Reduced opacity for subtlety
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })

      const particles = new THREE.Points(geometry, material)
      scene.add(particles)
      particlesRef.current.push(particles)

      return { geometry, material, particles, velocities }
    }

    // Create floating geometric shapes - more subtle
    const createFloatingGeometry = () => {
      const geometries = [
        new THREE.TorusGeometry(0.8, 0.3, 8, 16),
        new THREE.OctahedronGeometry(0.4),
        new THREE.TetrahedronGeometry(0.5),
        new THREE.IcosahedronGeometry(0.3)
      ]

      geometries.forEach((geo, index) => {
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color(0x6bcaf8),
          transparent: true,
          opacity: 0.05, // Very subtle opacity
          wireframe: true
        })

        const mesh = new THREE.Mesh(geo, material)
        mesh.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15
        )
        mesh.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        )

        scene.add(mesh)
        geometriesRef.current.push(mesh)
      })
    }

    // Create three particle systems with different characteristics - more subtle
    const systems = [
      createParticleSystem(600, 0.02, new THREE.Color(0x6bcaf8), 0.0005, 30), // Main blue particles
      createParticleSystem(300, 0.03, new THREE.Color(0x4a90e2), 0.001, 25),   // Secondary blue particles
      createParticleSystem(150, 0.04, new THREE.Color(0xffffff), 0.0015, 20)   // White accent particles
    ]

    // Create floating geometries
    createFloatingGeometry()

    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.05)
    scene.add(ambientLight)

    // Mouse movement handler with smooth interpolation
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop with enhanced effects
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)

      const time = Date.now() * 0.00005 // Slower movement

      // Animate each particle system
      systems.forEach((system, index) => {
        const positions = system.geometry.attributes.position.array as Float32Array
        const velocities = system.velocities

        for (let i = 0; i < positions.length; i += 3) {
          // Update positions based on velocities - more subtle movement
          positions[i] += velocities[i] * Math.sin(time + i * 0.05)
          positions[i + 1] += velocities[i + 1] * Math.cos(time + i * 0.05)
          positions[i + 2] += velocities[i + 2] * Math.sin(time + i * 0.025)

          // Wrap particles around boundaries
          if (Math.abs(positions[i]) > 30) positions[i] *= -0.9
          if (Math.abs(positions[i + 1]) > 30) positions[i + 1] *= -0.9
          if (Math.abs(positions[i + 2]) > 30) positions[i + 2] *= -0.9
        }

        system.geometry.attributes.position.needsUpdate = true

        // Rotate systems at different speeds - more subtle
        system.particles.rotation.x += 0.0001 * (index + 1)
        system.particles.rotation.y += 0.00015 * (index + 1)

        // React to mouse movement with different sensitivity - more subtle
        const sensitivity = 0.0001 / (index + 1)
        system.particles.rotation.x += mouseRef.current.y * sensitivity
        system.particles.rotation.y += mouseRef.current.x * sensitivity
      })

      // Animate floating geometries - more subtle
      geometriesRef.current.forEach((mesh, index) => {
        mesh.rotation.x += 0.001 * (index + 1)
        mesh.rotation.y += 0.0015 * (index + 1)
        mesh.position.y += Math.sin(time + index) * 0.0005
        mesh.position.x += Math.cos(time + index * 0.5) * 0.0005
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize with debouncing
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      }, 100)
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
      
      // Clean up all particle systems
      systems.forEach(system => {
        system.geometry.dispose()
        system.material.dispose()
      })

      // Clean up floating geometries
      geometriesRef.current.forEach(mesh => {
        mesh.geometry.dispose()
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(mat => mat.dispose())
        } else {
          mesh.material.dispose()
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
