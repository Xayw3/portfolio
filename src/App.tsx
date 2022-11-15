import { useEffect, useState } from 'react';
import './App.scss';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <>
      {
        loading ? <p>loading...</p> : <LandingPage />
      }
    </>
  );
};

export default App;
