import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Sidebar from './components/Sidebar';

export default function Home() {
  console.log('vista principal');
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title> Spotify</title>
      </Head>
      <main>
        <Sidebar />
      </main>
    </div>
  );
}
