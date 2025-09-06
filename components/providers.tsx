"use client";

import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet } from 'wagmi/chains';

// 1) create QueryClient
const queryClient = new QueryClient();

// 2) create rainbow/wagmi config
const config = getDefaultConfig({
  appName: 'MarketMirror',
  projectId: 'YOUR_PROJECT_ID', // <- get from WalletConnect Cloud
  chains: [mainnet],
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
