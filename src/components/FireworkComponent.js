import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const FirecrackerLowCount = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  const options = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "#000" },
    fpsLimit: 120,
    emitters: {
      direction: "top",
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1,
      },
      rate: {
        // INCREASED DELAY: Fires one rocket every 0.3 seconds (instead of 0.1)
        delay: 0.5, 
        quantity: 1,
      },
      size: { width: 100, height: 0 },
      position: { y: 100, x: 50 },
    },
    particles: {
      number: { value: 0 },
      color: {
        value: ["#FF595E", "#FFCA3A", "#8AC926", "#1982C4", "#6A4C93", "#00FFF5"],
      },
      shape: { type: "circle" },
      opacity: { value: 1 },
      size: { value: { min: 2, max: 4 } },
      // Rocket flight duration (ensures full page coverage)
      life: {
        count: 1,
        duration: { value: { min: 1.2, max: 2.2 } },
      },
      move: {
        enable: true,
        speed: { min: 15, max: 25 },
        direction: "top",
        outModes: { default: "destroy" },
        gravity: { enable: true, acceleration: 4 },
      },
      destroy: {
        mode: "split",
        split: {
          count: 1,
          factor: { value: 0.3 },
          rate: {
            // REDUCED SPLIT: 20-40 particles per burst for a cleaner look
            value: { min: 50, max: 100 },
          },
          particles: {
            color: {
              value: ["#FF0000", "#FFD700", "#00FF00", "#00BFFF", "#FF1493", "#FFFFFF"],
            },
            opacity: {
              value: { min: 0.1, max: 1 },
              animation: {
                enable: true,
                speed: 0.6,
                startValue: "max",
                destroy: "min",
              },
            },
            size: { value: { min: 1, max: 2.5 } },
            move: {
              enable: true,
              speed: { min: 5, max: 12 },
              direction: "none",
              random: true,
              outModes: { default: "destroy" },
              gravity: { enable: true, acceleration: 8 },
            },
            shadow: {
              enable: true,
              color: "random",
              blur: 10,
            },
          },
        },
      },
    },
  };

  if (init) return <Particles id="tsparticles" options={options} />;
  return null;
};

export default FirecrackerLowCount;