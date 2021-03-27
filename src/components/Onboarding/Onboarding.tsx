import React, { Fragment, useEffect, useState } from 'react';
import Page1 from './Onboarding-page1';
import Page2 from './Onboarding-page2';
import Page3 from './Onboarding-page3';
import Page4 from './Onboarding-page4';

interface Props {
  setAppState(page: string): void;
}

const Onboarding: React.FC<Props> = ({ setAppState }) => {
  const [page, setPage] = useState('page1');
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    if (page === 'submit') {
      // submit home info to backend here
      console.log(homeData);
      setAppState('App');
    }
  }, [page, homeData, setAppState]);

  return (
    <>
      {page === 'page1' && (
        <Page1
          setPage={setPage}
          setHomeData={setHomeData}
          homeData={homeData}
        />
      )}
      {page === 'page2' && (
        <Page2
          setPage={setPage}
          setHomeData={setHomeData}
          homeData={homeData}
        />
      )}
      {page === 'page3' && (
        <Page3
          setPage={setPage}
          setHomeData={setHomeData}
          homeData={homeData}
        />
      )}
      {page === 'page4' && (
        <Page4
          setPage={setPage}
          setHomeData={setHomeData}
          homeData={homeData}
        />
      )}
    </>
  );
};

export default Onboarding;
