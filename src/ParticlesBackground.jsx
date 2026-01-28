import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    if (!window.tsParticles) return;

    window.tsParticles.load("tsparticles", {
      fullScreen: { enable: true, zIndex: 0 },
      background: { color: "#000000" },
      particles: {
        number: {
          value: 80,
          density: { enable: true, area: 900 }
        },
        color: { value: "#ffffff" },
        links: {
          enable: true,
          color: "#ffffff",
          distance: 140,
          opacity: 0.25
        },
        move: {
          enable: true,
          speed: 0.7
        },
        size: {
          value: { min: 1, max: 3 }
        },
        opacity: {
          value: 0.6
        }
      }
    });
  }, []);

  return <div id="tsparticles"></div>;
}
