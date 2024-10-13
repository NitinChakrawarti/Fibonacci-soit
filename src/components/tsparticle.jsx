import { useState, useMemo, useEffect } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function Particle_animation() {
    // const [init, setInit] = useState(false);

    // // this should be run only once per application lifetime
    // useEffect(() => {
    //     initParticlesEngine(async (engine) => {
    //         await loadSlim(engine);
    //     }).then(() => {
    //         setInit(true);
    //     });
    // }, []);

    // const particlesLoaded = (container) => {
    //     console.log(container);
    // };

    // const options = useMemo(
    //     () => ({
    //         background: {
    //             color: {
    //                 value: "#00000",
    //             },
    //         },
    //         fpsLimit: 120,
    //         interactivity: {
    //             events: {
    //                 onClick: {
    //                     enable: true,
    //                     mode: "push",
    //                 },
    //                 onHover: {
    //                     enable: true,
    //                     mode: "repulse",
    //                 },
    //             },
    //             modes: {
    //                 push: {
    //                     quantity: 4,
    //                 },
    //                 repulse: {
    //                     distance: 200,
    //                     duration: 0.4,
    //                 },
    //             },
    //         },
    //         particles: {
    //             color: {
    //                 value: "#fffafa",
    //             },
    //             links: {
    //                 // color: "#41b583",
    //                 distance: 150,
    //                 enable: true,
    //                 opacity: 0.5,
    //                 width: 1,
    //             },
    //             move: {
    //                 direction: "top",
    //                 enable: true,
    //                 // outModes: {
    //                 //     default: "bounce",
    //                 // },

    //                 random: false,
    //                 speed: 6,
    //                 straight: true,
    //             },
    //             number: {
    //                 density: {
    //                     enable: true,
    //                 },
    //                 value: 80,
    //             },
    //             opacity: {
    //                 value: 0.5,
    //             },
    //             shape: {
    //                 type: "circle",
    //             },
    //             size: {
    //                 value: { min: 1, max: 5 },
    //             },
    //         },
    //         detectRetina: true,
    //     }),
    //     [],
    // );

    // if (init) {
    //     return (
    //         <div className="w-full">
    //             <div className="h-40 p-6 mb-8 mt-0 absolute" id='particlesAnime'>
    //                 <Particles
    //                     id="tsparticles"
    //                     particlesLoaded={particlesLoaded}
    //                     options={options}
    //                 />
    //             </div>
    //         </div>
    //     );
    // }

    // return null;}




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
            interactivity: {},
            background: {
                color: "#000000",
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
                    opacity: 0.3,
                    width: 1,
                },
                number: {
                    value: 40,
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
                    speed: { min: 0, max: 2 },
                    straight: true,
                },
            },
            detectRetina: true,
        }),
        []
    );

    return (
     
                <div className="h-24 relative">
                    <Particles options={options} />
                </div>
    );
};








