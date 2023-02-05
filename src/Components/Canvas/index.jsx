'use client';
import React from 'react';
import Script from 'next/script';

export default function index() {

    return (
        <div className="slider-ui">
            <Script
                id="google-maps"
                src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js"
                onReady={() => {
                    Particles.init({
                        selector: ".background-ui",
                        color: ["#03dac6", "#ff0266", "#000000"],
                        connectParticles: true,
                        responsive: [
                            {
                                breakpoint: 768,
                                options: {
                                    color: ["#faebd7", "#03dac6", "#ff0266"],
                                    maxParticles: 100,
                                    connectParticles: false
                                }
                            }],
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        move: {
                            "enable": true,
                            "speed": 1,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    });
                }}
            />
            <section className="nav">
                <h1>FRONTEND TRENDS</h1>
                <h3 className="span loader">
                    <span className="m">B</span>
                    <span className="m">E</span>
                    <span className="m">N</span>
                    <span className="m">E</span>
                    <span className="m">F</span>
                    <span className="m">I</span>
                    <span className="m">T</span>
                    <span className="m">S</span>
                    <span className="m">&nbsp;</span>
                    <span className="m">o</span>
                    <span className="m">f</span>
                    <span className="m">&nbsp;</span>
                    <span className="m">T</span>
                    <span className="m">E</span>
                    <span className="m">C</span>
                    <span className="m">H</span>
                    <span className="m">N</span>
                    <span className="m">O</span>
                    <span className="m">L</span>
                    <span className="m">O</span>
                    <span className="m">G</span>
                    <span className="m">I</span>
                    <span className="m">E</span>
                    <span className="m">S</span>
                </h3>
                <div className="nav-container">
                    <a className="nav-tab" href="#tab-svelte">SVELTE</a>
                    <a className="nav-tab" href="#tab-esbuild">ESBUILD</a>
                    <a className="nav-tab" href="#tab-next">NEXT.JS</a>
                    <a className="nav-tab" href="#tab-typescript">TYPESCRIPT</a>
                    <a className="nav-tab" href="#tab-vite">VITE</a>
                    <span className="nav-tab-slider" ></span>
                </div>
            </section>
            <canvas className="background-ui" ></canvas>
        </div>
    );
}