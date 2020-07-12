import React, { FC } from 'react';
import Particles from 'react-tsparticles';

const Clouds: FC = () => (
  <Particles
    className="absolute top-0 left-0 z-0 w-full h-full"
    params={{
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: false,
            mode: 'repulse',
          },
          resize: false,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
            speed: 3,
          },
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
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'out',
          random: true,
          speed: 0.25,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 7000,
          },
        },
        opacity: {
          value: 0.125,
        },
        shape: {
          type: 'image',
          images: [
            { src: '/clouds/cloud1.svg' },
            { src: '/clouds/cloud2.svg' },
            { src: '/clouds/cloud3.svg' },
            { src: '/clouds/cloud4.svg' },
            { src: '/clouds/cloud5.svg' },
          ],
        },
        size: {
          random: true,
          value: 500,
        },
      },
      detectRetina: true,
    }}
  />
);

export default Clouds;
