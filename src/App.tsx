import{ useEffect, useState } from 'react';
import { GlobalProvider } from './context/GlobalState';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Route, Routes } from 'react-router-dom';
import Header from './layout/header';
import Dashbord from './components/Dashboard/Dashbord';
import Filteringcompnent from './components/DataFilteringSortingModule/Filteringcompnent';
import { CircularProgress } from '@mui/material';

function App() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setPageLoaded(true);
    };

    window.addEventListener('load', handlePageLoad);

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return (
    <div className="App">

      <GlobalProvider>
        {!isPageLoaded && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              width: "100%"
            }}
          >
            <CircularProgress style={{ width: '200px' }} />

          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Dashbord />
              </>
            }
          />
          <Route
            path="/Filteringcompnent"
            element={
              <>
                <Header />
                <Filteringcompnent />
              </>
            }
          />
          <Route
            path="/Filteringcompnent"
            element={
              <>
                <Header />
                <Filteringcompnent />
              </>
            }
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
