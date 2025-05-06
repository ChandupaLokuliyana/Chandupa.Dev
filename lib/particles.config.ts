
import type { ISourceOptions } from "tsparticles-engine";

const particlesOptions: ISourceOptions = {
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  background: {
    color: {
      value: "#0f172a",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: [],
      },
      resize: true,
    },
  },
  particles: {
    color: {
      value: "#00ffff",
    },
    links: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 0.3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 15,
    },
    opacity: {
      value: 0.1,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 3, max: 6 },
    },
  },
  detectRetina: true,
};

export default particlesOptions;
