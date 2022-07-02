import Head from 'next/head';

import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <div className='flex flex-col w-screen h-screen items-center justify-between'>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>David Amyot</title>
                <meta name="David Amyot" content="Personal Website" />
            </Head>

            <Navbar />

            <main className="flex-1 flex flex-col w-screen justify-center items-center">
                {children}
            </main>

            <Footer />
        </div>
    );
}