import { greenMaterial } from '@/materials'

const Ground = () => (
  <mesh
    material={greenMaterial}
    receiveShadow
    rotation={[-1.5556753578613916, 0, 0]}
    position={[-0.1972523957972513, -0.9736325976858, -0.7306790064207817]}
  >
    <planeGeometry args={[5, 5]} />
  </mesh>
)

export default Ground
