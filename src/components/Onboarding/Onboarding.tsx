import React, { Fragment, useState } from 'react';
import Page1 from './Onboarding-page1';
import Page2 from './Onboarding-page2';
import Page3 from './Onboarding-page3';

const Onboarding = () => {
  const [page, setPage] = useState('page1');
  const [homeData, setHomeData] = useState({});

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
      {/* {page === "page4" && (
        
      )} */}
    </>
  );
};

export default Onboarding;
