import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Page1 from './OnboardingPage1';
import Page2 from './OnboardingPage2';
import Page3 from './OnboardingPage3';
import Page4 from './OnboardingPage4';

const Onboarding: React.FC = () => {
  const [page, setPage] = useState('page1');
  const [homeData, setHomeData] = useState({
    AC: '',
    EV: '',
    address: '',
    bathrooms: '',
    bedrooms: '',
    city: '',
    electricEnergyUsage: '',
    fuelType: '',
    gasUsage: '',
    heaterAge: '',
    hotTub: '',
    outdoor: '',
    pool: '',
    squareFeet: '',
    state: '',
    waterFuelType: '',
    waterHeaterAge: '',
    waterUse: '',
    year: '',
    zipCode: '',
  });
  const { setAppState } = useContext(AppContext);

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
