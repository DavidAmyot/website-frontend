// import Head from 'next/head';
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
      <div className='bg-orange-600 flex flex-col w-screen items-center'>
        <h2>Random fetched user data</h2>
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

      {/* Second Slide */}
      {/* <div className='bg-yellow-600 flex-1'>
        <h2>Random fetched user data</h2>
      </div> */}
    </>
  );
}