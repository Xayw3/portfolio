import { useEffect, useState } from 'react';
import './App.scss';
import LandingPage from './components/LandingPage/LandingPage';
import Loader from './components/Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (document.readyState === 'loading') {
  //     setLoading(true);
  //   } else {
  //     setLoading(false);
  //   }
  // }, []);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  });

  return (
    <>
      {
        loading ? <Loader /> : <LandingPage />
      }
    </>
  );
};

export default App;
