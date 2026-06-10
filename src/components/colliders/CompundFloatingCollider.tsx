import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { FLOATING_DATA } from '../../store/model-data'
const { oct, zepp1, zepp2 } = FLOATING_DATA

export function CompoundFloatingCollider() {
  return (
    <>
      <RigidBody type="kinematicPosition" colliders={false}>
        <CuboidCollider
          args={[oct.scale[0], oct.scale[1], oct.scale[2]]}
          position={[oct.position[0], oct.position[1], oct.position[2]]}
          rotation={[oct.rotation[0], oct.rotation[1], oct.rotation[2]]}
        />
      </RigidBody>
      <RigidBody type="kinematicPosition" colliders={false}>
        <CuboidCollider
          args={[zepp1.scale[0], zepp1.scale[1], zepp1.scale[2]]}
          position={[zepp1.position[0], zepp1.position[1], zepp1.position[2]]}
          rotation={[zepp1.rotation[0], zepp1.rotation[1], zepp1.rotation[2]]}
        />
      </RigidBody>
      <RigidBody type="kinematicPosition" colliders={false}>
        <CuboidCollider
          args={[zepp2.scale[0], zepp2.scale[1], zepp2.scale[2]]}
          position={[zepp2.position[0], zepp2.position[1], zepp2.position[2]]}
          rotation={[zepp2.rotation[0], zepp2.rotation[1], zepp2.rotation[2]]}
        />
      </RigidBody>
    </>
  )
}
