import { Canvas } from "@react-three/fiber";
import React, { Children } from "react";
import { twMerge } from "tailwind-merge";

export default function About(props) {
  return (
    <div className="AboutPage Page relative p-0" style={{ zIndex: 20 }}>
      <div className={`background bg-gradient`} />

      <div className="absolute inset-0">
        <Canvas shadows>
          {/* Ambient light provides general illumination */}
          <ambientLight intensity={0.3} />

          {/* Directional light is moved away from the cube to create highlights and shadows */}
          {/* <directionalLight position={[0, 0, 1]} intensity={1} castShadow /> */}
          <pointLight
            position={[0, 0, 5]}
            intensity={20}
            castShadow
            pointLightHelper
          />
          {/* <pointLightHelper args={[]}/> */}

          {/* The cube geometry */}
          <mesh
            rotateX={Math.PI / 4}
            rotateY={Math.PI / 4}
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
            rotateX={Math.PI / 4}
            rotateY={Math.PI / 4}
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
            rotateX={Math.PI / 4}
            rotateY={Math.PI / 4}
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
            rotateX={Math.PI / 4}
            rotateY={Math.PI / 4}
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
          </mesh>

          {/* A ground plane to catch the shadows */}
          <mesh position={[0, 0, -0.5]} rotation={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[20, 10]} />
            <meshStandardMaterial color="red" />
          </mesh>
        </Canvas>
      </div>
      
      <div className="text-wrapper flex flex-col items-center">
        <div className="flex flex-row text-xl ScrollView">
          <div className="animate-[fade-in-up_.5s_ease-out_.3s_both]">
            Hello
          </div>
        </div>

        <div
          className="flex flex-row items-end AWebDev ScrollView"
          // style={{ animation: "none", opacity: 1 }}
        >
          {"I'm Koliur Rahman,".split("").map((letter, i) => (
            <div
              key={i}
              className={twMerge(
                "animate-[fade-slide-in_.8s_cubic-bezier(.4,2,.7,.8)] text-2xl",
                i > 3 && "font-bold text-3xl"
              )}
              style={{
                animationDelay: `${0.6 + i * 0.04}s`,
                animationFillMode: "both",
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        <div className="grid animate-[expand-h_1.3s_1.5s_cubic-bezier(.3,1.4,.6,.395)_both]">
          <div className="flex flex-row items-end overflow-hidden ScrollView">
            <div className="text-2xl">A</div>
            <div className="text-3xl font-bold"> Web-Developer</div>
          </div>
        </div>

        <div
          className="calls-to-action text-xs [&>*]:animate-[fade-in-up_.7s_cubic-bezier(.4,1.8,.7,.9)_2.6s_both] ScrollView"
          style={{
            gap: "16px",
          }}
        >
          <a href="/resume.pdf" download="resume.pdf">
            <button>Resume</button>
          </a>
          <button
            style={{
              animationDelay: "2.7s",
            }}
            onClick={() => {
              document.getElementById("ContactPage").scrollIntoView();
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

function cubeContent() {
  return (
    <>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </>
  );
}
