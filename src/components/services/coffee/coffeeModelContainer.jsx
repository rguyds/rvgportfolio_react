import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CoffeeModel } from "./CoffeeModel";
import { OrbitControls, Stage } from "@react-three/drei";

const CoffeeModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <CoffeeModel />
        </Stage>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
        <perspectiveCamera position={[-1, 0, 1.08]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default CoffeeModelContainer;