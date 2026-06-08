import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, Physics, RapierRigidBody, RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { WINGs_WALL_DATA } from '../store/model-data'
import { generateWallData } from '../utils/generate-wall-data'

export default function CompoundWings() {
  const { nodes } = useGLTF('/modelos/ConvexMesh.glb')

  const rigidBodyRef = useRef<RapierRigidBody>(null)
  const wingData = useRef<
    Array<{
      args: [number, number, number]
      position: [number, number, number]
      rotation: [number, number, number]
    }>
  >([])

  const getWallData = () => {
    if (WINGs_WALL_DATA.length > 0) {
      wingData.current = WINGs_WALL_DATA
      return
    }
    const wingsGeometry = (nodes.a1 as THREE.Mesh).geometry
    console.warn({ nodes: nodes.a1 })
    wingData.current = generateWallData(wingsGeometry)
  }
  getWallData()

  return (
    <Physics debug={true}>
      <RigidBody ref={rigidBodyRef} type="fixed" colliders={false}>
        {
          <mesh geometry={(nodes.a1 as THREE.Mesh).geometry}>
            <meshStandardMaterial color="red" side={THREE.DoubleSide} />
          </mesh>
        }
        {wingData.current.map((face, i) => (
          <CuboidCollider
            key={i}
            args={face.args}
            position={face.position}
            rotation={face.rotation}
          />
        ))}
      </RigidBody>
    </Physics>
  )
}
