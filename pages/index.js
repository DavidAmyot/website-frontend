import React from "react";
import Script from 'next/script';

import styles from './index.module.css'
import { getRandomUserData } from '../utils/user';
import AnimatedBackground from '../components/animated-background.js';

export async function getServerSideProps() {
  const userData = await getRandomUserData();
  console.log("home:", userData);
  return {
    props: {
      userData,
    },
  };
}

export default function Home() {
  return (
    <>
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js' strategy="beforeInteractive" />
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.4/ScrollTrigger.min.js' strategy="beforeInteractive" />
      <Script src='js/background.js' strategy="afterInteractive" />

      <AnimatedBackground />

      {/* scrollElement class to be queried from javascript for scroll animations */}
      <div className={styles.scrollElement}></div>
    </>
  );
}