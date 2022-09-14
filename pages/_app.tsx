import { FC } from 'react';
import { AppProps } from 'next/app';
import '../css/app.css';
import TheDefaultMeta from '../components/TheDefaultMeta';
import TheAppReveal from '../components/TheAppReveal';
import { AppIsReadyProvider } from '../context/appIsReady';
import { AnimatePresence } from 'framer-motion';

const App: FC = ({ Component, router, pageProps }: AppProps) => {
  const url = `https://url.url${router.route}`;

  return (
    <div className="app relative border">
      <AppIsReadyProvider>
        <TheDefaultMeta canonical={url} />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={url} />
        </AnimatePresence>
        <TheAppReveal />
      </AppIsReadyProvider>
    </div>
  );
};

export default App;
