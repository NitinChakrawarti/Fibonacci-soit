import { useState, useMemo, useEffect } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function Particle_animation() {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: 'grab', // Can be "repulse", "bubble", "grab"
                    },
                    onClick: {
                        enable: true,
                        mode: 'repulse', // Changed from "push" to "repulse" for more visual effect
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 300, // Increased grab distance
                        links: {
                            opacity: 0.5, // Higher opacity when grabbed
                        },
                    },
                    repulse: {
                        distance: 400, // Increased repulse distance
                        duration: 0.8, // Increased duration for repulse effect
                    },
                    push: {
                        quantity: 6, // Increased the number of particles spawned on click
                    },
                    remove: {
                        quantity: 2,
                    },
                },
            },
            background: {
                color: "#040904",
            },
            fullScreen: {
                enable: true,
                zIndex: 1,
            },
            style: {
                position: "absolute",
            },
            particles: {
                color: {
                    value: "#fffafa",
                },
                links: {
                    color: "#41b583",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                number: {
                    value: 80,
                },
                opacity: {
                    value: { min: 0.1, max: 0.2 },
                    random: true,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
                move: {
                    direction: "top",
                    enable: true,
                    speed: { min: 0, max: 4 },
                    straight: false,
                },
            },
            detectRetina: true,
        }),
        []
    );

    return (

        <div className=" h-full relative">
            <Particles options={options} />
        </div>
    );
};








