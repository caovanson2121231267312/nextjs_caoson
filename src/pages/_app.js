import DefaultLayout from "../Components/Layouts/Layout";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout || DefaultLayout;

    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Script
                id="popper"
                src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
                crossorigin="anonymous"
            />
            <Script
                id="bootstrap"
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
                crossorigin="anonymous"
            />
        </>
    );
}
export default MyApp;