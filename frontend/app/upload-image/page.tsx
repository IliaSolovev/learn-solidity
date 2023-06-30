import {ConnectButton} from '@rainbow-me/rainbowkit';
import type {NextPage} from 'next';
import styles from '../../styles/Home.module.css';
import {UploadNft} from "./Upload";

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <ConnectButton/>
      <UploadNft/>
    </main>
  );
};

export default Home;
