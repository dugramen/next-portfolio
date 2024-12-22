import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { useWindowScroll } from "@uidotdev/usehooks";

export function Three({
  // atTop
}) {
  const [scroll] = useWindowScroll();

  return (
    <div className="absolute inset-0">
      <Canvas
        shadows
        camera={{
          position: [0, 0, 5],
        }}
      >
        {/* Ambient light provides general illumination */}
        <ambientLight intensity={0.3} />

        {/* Directional light is moved away from the cube to create highlights and shadows */}
        {/* <directionalLight position={[0, 0, 1]} intensity={1} castShadow /> */}
        <pointLight
          position={[0, 0, 5]}
          intensity={20}
          castShadow
          // pointLightHelper
        />
        {/* <pointLightHelper args={[]}/> */}

        {/* The cube geometry */}
        {/* <mesh
          // rotateX={Math.PI / 4}
          // rotateY={Math.PI / 4}
          position={[2, 2, 0]}
          castShadow
          // shadow-mapSize-width={1024}
          // shadow-mapSize-height={1024}
          // shadow-camera-near={0.5}
          // shadow-camera-far={50}
          // shadow-camera-left={-5}
          // shadow-camera-right={5}
          // shadow-camera-top={5}
          // shadow-camera-bottom={-5}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh
          // rotateX={Math.PI / 4}
          // rotateY={Math.PI / 4}
          position={[-2, 2, 0]}
          castShadow
          // shadow-mapSize-width={1024}
          // shadow-mapSize-height={1024}
          // shadow-camera-near={0.5}
          // shadow-camera-far={50}
          // shadow-camera-left={-5}
          // shadow-camera-right={5}
          // shadow-camera-top={5}
          // shadow-camera-bottom={-5}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh
          // rotateX={Math.PI / 4}
          // rotateY={Math.PI / 4}
          position={[2, -2, 0]}
          castShadow
          // shadow-mapSize-width={1024}
          // shadow-mapSize-height={1024}
          // shadow-camera-near={0.5}
          // shadow-camera-far={50}
          // shadow-camera-left={-5}
          // shadow-camera-right={5}
          // shadow-camera-top={5}
          // shadow-camera-bottom={-5}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh
          // rotateX={Math.PI / 4}
          // rotateY={Math.PI / 4}
          position={[-2, -2, 0]}
          castShadow
          // shadow-mapSize-width={1024}
          // shadow-mapSize-height={1024}
          // shadow-camera-near={0.5}
          // shadow-camera-far={50}
          // shadow-camera-left={-5}
          // shadow-camera-right={5}
          // shadow-camera-top={5}
          // shadow-camera-bottom={-5}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh> */}

        {/* A ground plane to catch the shadows */}
        <mesh position={[0, 0, -0.5]} rotation={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[20, 10]} />
          <meshStandardMaterial color="red" />
        </mesh>

        {/* <EffectComposer>

        </EffectComposer> */}
      </Canvas>
    </div>
  );
}
