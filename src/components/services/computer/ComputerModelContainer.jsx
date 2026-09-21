import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, Stage } from "@react-three/drei";

const ComputerModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
        <ComputerModel />
        </Stage>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate  />
        <perspectiveCamera position={[-1,0,1.08]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default ComputerModelContainer;