"use client"

import React, { useEffect } from 'react';

export function Form() {
    useEffect(() => {
        // Function to dynamically load script
        const loadScript = () => {
            const script = document.createElement('script');
            script.src = "https://tally.so/widgets/embed.js";
            script.onload = () => {
                if (typeof Tally !== 'undefined') {
                    Tally.loadEmbeds();
                } else {
                    document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
                        e.src = e.dataset.tallySrc;
                    });
                }
            };
            script.onerror = () => {
                console.error('Failed to load the Tally script');
            };
            document.body.appendChild(script);
        };

        // Check if the script is already included
        if (document.querySelector(`script[src="https://tally.so/widgets/embed.js"]`) === null) {
            loadScript();
        }
    }, []);

    return (
        <>
            <iframe
                data-tally-src="https://tally.so/embed/mBGLlA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="486"
                title="ecrans-graphiques"
            ></iframe>
        </>
    );
}
