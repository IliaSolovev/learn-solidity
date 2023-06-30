"use client"

import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, goerli, mainnet, optimism, polygon, hardhat } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import React from "react";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    hardhat,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: 'nft',
  projectId: process.env.NEXT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export const Web3Provider = ({ children }: {children: React.ReactNode}) =>  {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider showRecentTransactions chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

