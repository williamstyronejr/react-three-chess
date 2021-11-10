import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
const posArray = new Float32Array(1000 * 3);

const ParticleBG = (props) => {
  const ref = React.useRef();
  React.useLayoutEffect(() => {
    for (let i = 0; i < 1000 * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
  }, []);

  useFrame((state, delta) => (ref.current.rotation.y -= 0.1 * delta));

  return (
    <points {...props} ref={ref} scale={2}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          array={posArray}
          itemSize={3}
          count={1000}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="orange" />
    </points>
  );
};

const Game = ({ gameStarted }) => {
  return (
    <Canvas>
      <color attach="background" args={["#2b2b2b"]} />
      <ambientLight />
      <ParticleBG />
    </Canvas>
  );
};

export default Game;
