'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface TRONCircuitNetworkProps {
  className?: string
}

export default function TRONCircuitNetwork({ className = '' }: TRONCircuitNetworkProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create circuit network
    const createCircuitNetwork = () => {
      const group = new THREE.Group()

      // Circuit paths between cards
      const createCircuitPath = (start: THREE.Vector3, end: THREE.Vector3, color: number) => {
        const points = []
        const segments = 20
        
        // Create curved path with control points
        const midPoint = start.clone().add(end).multiplyScalar(0.5)
        midPoint.y += (Math.random() - 0.5) * 2
        midPoint.z += (Math.random() - 0.5) * 1

        for (let i = 0; i <= segments; i++) {
          const t = i / segments
          const point = new THREE.Vector3()
          
          // Quadratic Bezier curve
          point.copy(start).multiplyScalar(Math.pow(1 - t, 2))
          point.add(midPoint.clone().multiplyScalar(2 * (1 - t) * t))
          point.add(end.clone().multiplyScalar(t * t))
          
          points.push(point)
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const material = new THREE.LineBasicMaterial({ 
          color: color,
          transparent: true,
          opacity: 0.6,
          linewidth: 2
        })
        
        const line = new THREE.Line(geometry, material)
        return line
      }

      // Define card positions (3D space)
      const cardPositions = [
        new THREE.Vector3(-3, 0, 0),  // Left card
        new THREE.Vector3(0, 0, 0),   // Center card
        new THREE.Vector3(3, 0, 0)    // Right card
      ]

      // Create circuit connections
      const colors = [0x8B5CF6, 0xA855F7, 0x6366F1] // cosmic, andromeda, orion
      
      // Connect all cards in a network
      for (let i = 0; i < cardPositions.length; i++) {
        for (let j = i + 1; j < cardPositions.length; j++) {
          const circuit = createCircuitPath(
            cardPositions[i], 
            cardPositions[j], 
            colors[Math.floor(Math.random() * colors.length)]
          )
          group.add(circuit)
        }
      }

      // Add energy nodes at card positions
      cardPositions.forEach((pos, index) => {
        const nodeGeometry = new THREE.SphereGeometry(0.1, 16, 16)
        const nodeMaterial = new THREE.MeshBasicMaterial({ 
          color: colors[index % colors.length],
          transparent: true,
          opacity: 0.8
        })
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
        node.position.copy(pos)
        group.add(node)

        // Add pulsing energy field
        const fieldGeometry = new THREE.SphereGeometry(0.3, 16, 16)
        const fieldMaterial = new THREE.MeshBasicMaterial({ 
          color: colors[index % colors.length],
          transparent: true,
          opacity: 0.1,
          wireframe: true
        })
        const field = new THREE.Mesh(fieldGeometry, fieldMaterial)
        field.position.copy(pos)
        group.add(field)
      })

      // Add floating energy particles
      for (let i = 0; i < 50; i++) {
        const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8)
        const particleMaterial = new THREE.MeshBasicMaterial({ 
          color: colors[Math.floor(Math.random() * colors.length)],
          transparent: true,
          opacity: 0.6
        })
        const particle = new THREE.Mesh(particleGeometry, particleMaterial)
        
        // Random position in the network area
        particle.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 2
        )
        
        group.add(particle)
      }

      return group
    }

    const circuitNetwork = createCircuitNetwork()
    scene.add(circuitNetwork)

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Rotate the entire network
      circuitNetwork.rotation.y += 0.002
      circuitNetwork.rotation.x += 0.001

      // Animate energy particles
      circuitNetwork.children.forEach((child, index) => {
        if (index >= 6) { // Skip circuit lines and nodes, only animate particles
          child.rotation.y += 0.01
          child.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001
        }
      })

      // Pulse energy fields
      circuitNetwork.children.forEach((child, index) => {
        if (index >= 3 && index < 6) { // Energy fields
          const scale = 1 + Math.sin(Date.now() * 0.003 + index) * 0.2
          child.scale.setScalar(scale)
        }
      })

      // Add hover effect
      if (isHovered) {
        circuitNetwork.rotation.y += 0.005
        circuitNetwork.rotation.x += 0.003
      }

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return
      
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [isHovered])

  return (
    <div 
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}
