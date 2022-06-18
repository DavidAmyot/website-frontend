// import Head from 'next/head';
// import Image from 'next/image';
// import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
// import Link from 'next/link';

export default function Footer({ children, home }) {
    return (
        <div className="h-16 w-screen text-xs justify-center lg:justify-start items-center flex px-8">
            © Copyright 2022 - David Amyot
        </div>
    );
}