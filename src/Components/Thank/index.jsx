import React, { memo, useEffect } from 'react';
import Script from 'next/script'

const index = memo(() => {

    useEffect(() => {
        let select = s => document.querySelector(s),
            selectAll = s => document.querySelectorAll(s),
            mainSVG = select('#mainSVG'),
            allNumbers = gsap.utils.toArray('#numberGroup path'),
            allThankYou = gsap.utils.toArray('#thankYouGroup path'),
            //colorArray = ["#EF5350", "#EC407A","#AB47BC","#7E57C2","#5C6BC0","#42A5F5","#29B6F6","#26C6DA","#26A69A","#66BB6A","#9CCC65","#D4E157","#FFEE58","#FFCA28","#FFA726","#FF7043","#8D6E63","#BDBDBD","#78909C"],
            colorArray = ["#42c2f1", "#fbda4f", "#ab63df", "#5fc581"],
            confetti = select('.confetti'),
            container = select('.container');

        gsap.set('svg', {
            visibility: 'visible'
        });

        let confettiTl = gsap.timeline({ paused: true });

        function playConfetti() {

            confettiTl.play(0);
        }

        function createConfetti() {
            var i = 160, clone, tl, rot, duration, paperDuration;
            while (--i > -1) {
                if (window.CP.shouldStopExecution(0)) break;
                tl = gsap.timeline();
                clone = confetti.cloneNode(true);
                container.appendChild(clone);
                rot = gsap.utils.random(0, 360);
                duration = gsap.utils.random(3, 9);
                paperDuration = duration / 20;
                gsap.set(clone, {
                    fill: gsap.utils.random(colorArray),
                    rotation: rot,
                    transformOrigin: '50% 50%'
                });


                tl.fromTo(clone, {
                    x: gsap.utils.random(0, 800),
                    y: gsap.utils.random(-250, -50),
                    rotation: rot
                },
                    {
                        duration: duration,
                        x: '+=' + gsap.utils.random(-200, 200),
                        y: 650,
                        rotation: '+=180',
                        ease: 'linear'
                    }).

                    to(clone.querySelector('.paper'), {
                        duration: duration / 23,
                        scaleY: 0.1,
                        repeat: 23,
                        yoyo: true
                    },
                        0);
                //console.log(paperDuration)
                confettiTl.add(tl, i / 200).timeScale(2.3);
            } window.CP.exitedLoop(0);

            gsap.set('.paper', {
                transformOrigin: '50% 50%'
            });

        }

        let tl = gsap.timeline({ repeat: -1 });
        tl.add('step0', '+=2').
            to('#one', {
                x: -105,
                ease: 'expo.inOut'
            },
                'step0').
            to('#one', {
                rotation: 10,
                transformOrigin: '50% 150%',
                ease: 'sine.inOut'
            },
                'step0+=0').
            to('#one', {
                rotation: 0,

                ease: 'elastic(0.8, 0.28)'
            },
                'step0+=0.3').
            to('#one', {
                morphSVG: {
                    shape: '#one_mid'
                },

                ease: 'expo.inOut'
            },
                'step0').
            add('step1').
            to('#one, .numberMask', {
                x: '+=548',
                ease: 'expo.inOut'
            },
                'step1').
            to('.thankYouMask', {
                x: '+=548',
                ease: 'expo.inOut'
            },
                'step1').
            from(allThankYou, {
                x: 50,
                immediateRender: false,
                stagger: {
                    each: 0.05
                },

                ease: 'expo'
            },
                'step1').
            from('#gradBar', {
                width: 0,
                ease: 'expo.inOut'
            },
                'step1').

            to('#one', {
                rotation: -10,
                transformOrigin: '50% 100%',
                ease: 'sine.inOut'
            },
                'step1+=0').
            to('#one', {
                rotation: 0,
                duration: 1,
                ease: 'elastic(0.8, 0.28)'
            },
                'step1+=0.3').

            add('step2', '-=0').
            to('#one', {
                morphSVG: {
                    shape: '#one_end'
                },

                y: '-=80',
                ease: 'expo.inOut'
            },
                'step2').
            to('#oneContainer', {
                scaleX: 1.4,
                scaleY: 0.6,
                duration: 0.8,
                transformOrigin: '50% 0%',
                ease: 'sine'
            },
                'step2').


            add('step3').
            to('#one', {
                morphSVG: {
                    shape: '#one_end'
                },

                y: '+=80',
                ease: 'expo.in'
            },
                'step3').
            to('#oneContainer', {
                scale: 1,
                duration: 0.38,
                ease: 'expo.in'
            },
                'step3').

            to('#one', {
                rotation: 3,
                duration: 1,
                transformOrigin: '50% 120%',
                ease: "wiggle({type:easeOut, wiggles:8})"
            },
                'step3+=0.5').
            from('#dot', {
                scale: 0,
                transformOrigin: '50% 50%',
                ease: 'elastic(0.4, 0.5)'
            },
                'step3+=0.46').
            add(playConfetti, 'step3+=0.46').
            add('step4', '+=2').
            to('#one', {
                morphSVG: {
                    shape: "#one_mid"
                },

                duration: 0.2
            },
                'step4').
            to('#one, .thankYouMask', {
                x: '-=548',
                ease: 'expo.inOut'
            },
                'step4').
            to('#dot', {
                opacity: 0,
                duration: 0.2,
                ease: 'expo'
            },
                'step4').
            to('.numberMask', {
                x: '-=548',
                ease: 'expo.inOut'
            },
                'step4').
            from(allNumbers, {
                x: 50,
                immediateRender: false,
                stagger: {
                    each: 0.05
                }
            },

                'step4').
            from(allNumbers, {
                rotation: 50,
                transformOrigin: '50% 50%',
                immediateRender: false,
                stagger: {
                    each: 0.05
                },

                ease: 'expo'
            },
                'step4').
            to('#gradBar', {
                width: 0,
                ease: 'expo.inOut'
            },
                'step4').

            add('step5').
            to('#one', {
                morphSVG: {
                    shape: "M219.16,266.34h-16.8V253.5l32-.12v89.4H219.16Z"
                },

                ease: 'expo.inOut',
                x: 0
            },
                'step5-=0.3').

            to('#one', {
                rotation: -10,
                transformOrigin: '50% 100%',
                ease: 'sine.inOut'
            },
                'step5-=0.3').
            to('#one', {
                rotation: 0,
                duration: 1,
                ease: 'elastic(0.8, 0.28)'
            },
                'step5');


        createConfetti();

        //start anim - plays once
        gsap.from('#one, #numberGroup path', {
            stagger: {
                each: 0.05
            },

            scaleY: 0,
            delay: 0.6,
            duration: 0.8,
            transformOrigin: '50% 100%',
            ease: 'elastic(0.73, 0.6)'
        });


        //loop the gradient bar
        gsap.to('#gradPattern', {
            attr: {
                x: 556
            },

            duration: 2,
            repeat: -1,
            ease: 'linear'
        });

    }, [])

    return (
        <div>
            <Script
                id="gsap"
                src="https://unpkg.co/gsap@3/dist/gsap.min.js"
                onReady={() => {
                }}
            />
            {/* <Script
                id="gsap"
                src="https://unpkg.co/gsap@3/dist/gsap.min.js"
                onReady={() => {
                }}
            />
            <Script
                id="gsap"
                src="https://unpkg.co/gsap@3/dist/gsap.min.js"
                onReady={() => {
                }}
            /> */}
            <svg id="mainSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
                <defs>
                    <linearGradient id="codepenGrad" x1="0" y1="383.12" x2="556" y2="383.12" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#42c2f1" />
                        <stop offset="0.2" stop-color="#fbda4f" />
                        <stop offset="0.6" stop-color="#ab63df" />
                        <stop offset="0.8" stop-color="#5fc581" />
                        <stop offset="1" stop-color="#42c2f1" />
                    </linearGradient>
                    <pattern id="gradPattern" width="556" height="62.4" x="0" y="0" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" fill="url(#codepenGrad)" width="556" height="62.4" />
                    </pattern>
                    <clipPath id="numberMask">
                        <rect className="numberMask" x="122.36" y="204.62" width="547.24" height="176.58" fill="red" />
                    </clipPath>
                    <clipPath id="thankYouMask">
                        <rect className="thankYouMask" x="-500" y="204.62" width="615" height="176.58" fill="#29abe2" />
                    </clipPath>
                    <path id="one_mid" d="M219.16,266.34h0v-62.6l15.24-.12V389.93H219.16Z" />
                    <path id="one_end" d="M219.16,266.34h0v-12.9l15.24-.12-1.14,62.58h-13Z" />
                    <g className="confetti">
                        <rect className="paper" width="13" height="8" />
                    </g>
                </defs>

                <rect id="gradBar" x="120" y="376.31" width="556" height="10" fill="url(#gradPattern)" />
                <path id="one_end" d="M219.16,266.34h-16.8V253.5l32-.12v89.4H219.16Z" fill="#fff" opacity="0" />
                <g id="oneContainer">
                    <path id="one" d="M219.16,266.34h-16.8V253.5l32-.12v89.4H219.16Z" fill="#fff" />
                </g>
                <g clip-path="url(#numberMask)">
                    <g id="numberGroup">
                        <path id="_0_1" data-name="0_1" d="M253.12,298c0-27.72,14.4-46.08,35.76-46.08,21.6,0,35.88,18.48,35.88,46.08s-14.16,46.2-35.76,46.2C267.64,344.22,253.12,325.74,253.12,298Zm56.64,0c0-19.92-7.92-32.16-20.88-32.16-12.72,0-20.64,12.24-20.64,32.16s8,32.28,20.76,32.28S309.76,318.06,309.76,298Z" fill="#fff" />
                        <path id="comma" d="M340.6,326.58h14l-8.88,30.24h-10Z" fill="#fff" />
                        <path id="_0_2" data-name="0_2" d="M366.88,298c0-27.72,14.4-46.08,35.76-46.08,21.6,0,35.88,18.48,35.88,46.08s-14.16,46.2-35.76,46.2C381.4,344.22,366.88,325.74,366.88,298Zm56.64,0c0-19.92-7.92-32.16-20.88-32.16C389.92,265.86,382,278.1,382,298s8,32.28,20.76,32.28S423.52,318.06,423.52,298Z" fill="#fff" />
                        <path id="_0_3" data-name="0_3" d="M446.56,298c0-27.72,14.4-46.08,35.76-46.08,21.6,0,35.88,18.48,35.88,46.08s-14.16,46.2-35.76,46.2C461.08,344.22,446.56,325.74,446.56,298Zm56.64,0c0-19.92-7.92-32.16-20.88-32.16-12.72,0-20.64,12.24-20.64,32.16s8,32.28,20.76,32.28S503.2,318.06,503.2,298Z" fill="#fff" />
                        <path id="_0_4" data-name="0_4" d="M526.24,298c0-27.72,14.4-46.08,35.76-46.08,21.6,0,35.88,18.48,35.88,46.08s-14.16,46.2-35.76,46.2C540.76,344.22,526.24,325.74,526.24,298Zm56.64,0c0-19.92-7.92-32.16-20.88-32.16-12.72,0-20.64,12.24-20.64,32.16s8,32.28,20.76,32.28S582.88,318.06,582.88,298Z" fill="#fff" />
                    </g>
                </g>
                <g clip-path="url(#thankYouMask)">
                    <g id="thankYouGroup">
                        <path d="M139.48,266.7h-23.4V253.38H178V266.7H154.72v76.08H139.48Z" fill="#fff" />
                        <path d="M241.12,300.78v42h-14.4v-38.4c0-8.76-5.52-14.4-13.68-14.4s-13.8,5.64-13.8,14.4v38.4h-14.4v-89.4h14.4v31.08c3.72-5,10.08-7.8,17.52-7.8C231.16,276.66,241.12,286.5,241.12,300.78Z" fill="#fff" />
                        <path d="M303.76,299.58v43.2H290.2v-7.2c-4.8,5.76-11.4,8.64-19.2,8.64-14.4,0-23.52-8.16-23.52-19.2,0-9.6,7.56-16,20.64-18.84l21.24-4.56v-2c0-6-4.92-10-12.12-10a15.45,15.45,0,0,0-14.88,10l-12.48-6.24c3.72-9.84,14.52-16.68,27.36-16.68C293,276.66,303.76,286.14,303.76,299.58Zm-14.4,17.16v-4.2L271,316.62c-5.4,1.2-8.52,4.32-8.52,8.28,0,4.92,4,7.92,10.2,7.92C282.28,332.82,289.36,325.86,289.36,316.74Z" fill="#fff" />
                        <path d="M368.8,300.78v42H354.4v-38.4c0-8.76-5.52-14.4-13.68-14.4s-13.8,5.64-13.8,14.4v38.4h-14.4V278.1h13.56v7.8c3.6-6,10.32-9.24,18.36-9.24C358.84,276.66,368.8,286.62,368.8,300.78Z" fill="#fff" />
                        <path d="M412.6,304.14l23.64,38.64h-16l-17-28.32-10.08,10.92v17.4h-14.4v-89.4h14.4v52.56l26.16-27.84h16.92Z" fill="#fff" />
                        <path d="M518.8,278.1,490,350.34c-2.88,7.08-7.92,18.84-24.24,18.84a23.46,23.46,0,0,1-9.48-1.68V355.38a33,33,0,0,0,7.44,1c8.28,0,10.44-4.8,12.12-8.76l2.16-5L452.56,278.1h15.72l17.4,45.72,17.4-45.72Z" fill="#fff" />
                        <path d="M519.16,310.38c0-19.56,14.88-33.72,34-33.72s34,14.16,34,33.72-15.12,33.84-34,33.84S519.16,329.94,519.16,310.38Zm52.92.12c0-11.88-8-20.52-19-20.52s-19,8.64-19,20.52,7.92,20.4,19,20.4S572.08,322.38,572.08,310.5Z" fill="#fff" />
                        <path d="M649.59,278.1v64.68H635.92v-7.44c-3.6,5.64-10.2,8.88-18.12,8.88-14.4,0-24.48-11-24.48-25.92V278.1h14.4v38.4c0,8.76,5.52,14.4,13.8,14.4s13.68-5.64,13.68-14.4V278.1Z" fill="#fff" />
                    </g>

                </g>
                <rect id="dot" x="662.8" y="326.58" width="14.88" height="16.2" fill="#fff" />
                <g className="container" />
            </svg>
        </div>
    );
});

export default index;