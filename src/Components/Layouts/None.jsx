import React from 'react';
import Head from 'next/head';
import Script from 'next/script'
import '../../scss/index.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {children}
            </div>
            <Script
                rel="preload"
                id="popper"
                src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
            />
            <Script
                rel="preload"
                id="bootstrap"
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
            />
        </>
    );
};

export default Layout;