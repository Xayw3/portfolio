import { useEffect, useState } from 'react';
import './App.scss';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'loading') {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {
        loading ? <p>loading...</p> : <LandingPage />
      }
    </>
  );
};

export default App;
