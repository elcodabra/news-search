import '../styles/globals.css';
import { useState, useCallback } from 'react';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(false);
  const [noFound, setNoFound] = useState(false);
  const [result, setResult] = useState(false);

  const loader = useCallback((param) => {
    setPreloader(param);
  }, [preloader]);
  const noNewsFound = useCallback((param) => {
    setNoFound(param);
  }, [noFound]);
  const searchResult = useCallback((param) => {
    setResult(param);
  }, [result]);

  const headerProps = [loader, noNewsFound, searchResult];

  return <Layout headerProps={headerProps} >
    <Component
      {...pageProps}
      loader={preloader}
      noFound={noFound}
      result={result}
    />
  </Layout>;
}

export default MyApp;
