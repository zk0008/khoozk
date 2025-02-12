import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Background = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true, // automatically start animation
      background: {
        color: {
          value: "#7F7F7F",
        },
        opacity: 1,
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: false,
            mode: [],
          },
          onDiv: {
            selectors: [],
            enable: false,
            mode: [],
            type: "circle",
          },

          onHover: {
            enable: false,
            mode: "repulse",
            parallax: {
              enable: false,
              force: 2, // Force factor (if enabled)
              smooth: 10, // Smoothness of parallax effect (if enabled)
            },
          },
          resize: {
            delay: 0.25,
            enable: true, // Enable resizing the particles container when the window resizes
          },
        },
        modes: {
          // different modes (not applicable)
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#000", // White particles for star-like effect
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: false,
          outModes: {
            default: OutMode.out,
          },
          random: false, // Random movement for stars
          speed: 0.5, // Slower movement for a more "starry" effect
          straight: false,
        },
        number: {
          density: {
            enable: true, // Enable particle density based on container size
          },
          value: 200, // Higher density for more stars
        },
        opacity: {
          value: {
            min: 0.1,
            max: 1,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 0.25,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        shape: {
          type: "circle",
          fill: true,
          close: true,
        },
        size: {
          value: 2,
        },
      },
      pauseOnBlur: true, // Pause particles when the window loses focus
      pauseOnOutsideViewport: true, // Pause particles when outside the viewport
      zLayers: 100, // Set z-index layers for particles
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default Background;
