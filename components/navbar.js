// import Head from 'next/head';
import Image from 'next/image';
// import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
// import Link from 'next/link';

export default function Navbar({ children, home }) {
    return (
        <div className="bg-white h-14 w-screen px-12 text-black text-3xl flex flex-row justify-between items-center">
            {/* <div className='bg-red-300'> */}

            <Image
                priority
                src="/images/logo.png"
                layout='fixed'
                // className='bg-blue-400'
                // style={"position: relative"}
                // className={utilStyles.borderCircle}
                height={36}
                width={200}
                alt={"Website Logo"}
            />
            {/* </div> */}
            <div className='flex flex-row bg-transparent items-center h-14'>
                Home
                Services
                Contact Me
            </div>
        </div>
    );
}