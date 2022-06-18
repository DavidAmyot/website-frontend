// import Head from 'next/head';
import Image from 'next/image';
// import Layout, { siteTitle } from '../components/layout';
// import utilStyles from '../styles/utils.module.css';
import { getRandomUserData } from '../utils/user';
// import Navbar from '../components/navbar';

export async function getServerSideProps() {
  const userData = await getRandomUserData();
  console.log("home:", userData);
  return {
    props: {
      userData,
    },
  };
}

export default function Home({ userData }) {
  return (
    <>
      {/* First Slide */}
      <div className='flex flex-col w-screen h-full items-center justify-around pb-32'>
        <Image
          priority
          src="/images/profile.png"
          layout='fixed'
          height={335}
          width={300}
        />

        <div>
          <div className='text-center pb-5 font-bold'><h1>Next.js Random Api Data</h1></div>
          <ul>
            <li>
              Name: {userData.name}
              <br />
              Gender: {userData.gender}
              <br />
              Phone: {userData.phone}
              <br />
              Email: {userData.email}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}