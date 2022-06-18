import '../styles/global.css';
import Layout from '../components/layout';
// import Head from 'next/head';
// import Script from 'next/script';

export default function App({ Component, pageProps }) {

    // This is called everywhere in the app and Layout renders the 
    // compoenent passed to it. For example, if on the index we export
    // the Home component by defaut, it's called in the Layout component.
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}