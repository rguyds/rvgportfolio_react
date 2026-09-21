import { useGLTF } from '@react-three/drei'

export function CoffeeModel(props) {
  const { nodes, materials } = useGLTF('/coffeeModel.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.005, 0]} scale={0.963}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.COFFE} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.CHANTILY} />
      </group>
      <mesh geometry={nodes.Object_7.geometry} material={materials.LOGO} position={[0, -0.016, 0.005]} scale={[1, 1.056, 1]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.LOGO} position={[-0.008, -0.016, -0.004]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1.056, 1]} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.PLASTIC2} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.PLASTIC1} position={[0, -0.011, 0]} scale={1.016} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.PLASTIC1} />
    </group>
  )
}

useGLTF.preload('/coffeeModel.glb')
