import {ConnectButton} from '@rainbow-me/rainbowkit';
import type {NextPage} from 'next';
import {UploadNft} from "./Upload";

const Home: NextPage = () => {
  return (
    <main className="p-4">
      <header className="mb-4">
        <ConnectButton/>
      </header>
      <UploadNft/>
    </main>
  );
};

export default Home;
