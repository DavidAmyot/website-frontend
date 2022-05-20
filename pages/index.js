import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getRandomUserData } from '../utils/user';

export async function getStaticProps() {
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
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Random fetched user data</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            Name: {userData.name}
            <br />
            Gender: {userData.gender}
            <br />
            Phone: {userData.phone}
            <br />
            Email: {userData.email}
          </li>
        </ul>
      </section>
    </Layout>
  );
}