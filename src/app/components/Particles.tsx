'use client';
import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim';
import { loadFull } from 'tsparticles';

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 100,
              duration: 0.5,
            },
          },
        },
        particles: {
          color: {
            value: '#037fff',
          },
          // links: {
          //   color: '#ffffff',
          //   distance: 150,
          //   enable: true,
          //   opacity: 0.5,
          //   width: 1,
          // },
          move: {
            direction: 'top',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 500,
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: { min: 1, max: 6 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
