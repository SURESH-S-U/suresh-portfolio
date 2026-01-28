import Particles from "react-tsparticles";

export default function ParticleTest() {
  return (
    <Particles
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999
      }}
      options={{
        fullScreen: false,
        particles: {
          number: { value: 50 },
          color: { value: "#ff0000" },
          size: { value: 5 },
          move: { enable: true, speed: 2 }
        }
      }}
    />
  );
}
