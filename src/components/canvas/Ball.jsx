import { Suspense } from "react";
import {
  Decal,
  Float,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";

const BallMesh = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={4}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Scene content for one tech ball. It is rendered inside a drei <View> that
// shares a single WebGL canvas with every other ball. Each ball needs its own
// camera (the default one is shared by all views) and its own DOM box for
// pointer input, so dragging a ball rotates only that ball.
const Ball = ({ icon, viewRef }) => (
  <Suspense fallback={null}>
    <PerspectiveCamera
      makeDefault
      position={[0, 0, 5]}
      fov={75}
      near={0.1}
      far={1000}
    />
    <OrbitControls enableZoom={false} domElement={viewRef.current} />
    <BallMesh imgUrl={icon} />
  </Suspense>
);

export default Ball;
