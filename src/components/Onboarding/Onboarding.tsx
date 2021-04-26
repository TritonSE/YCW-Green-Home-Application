import React, { useContext, useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { AppContext } from '../../contexts/AppContext';
import { homeInfo } from './onboardingData';
import Page1 from './OnboardingPage1';
import Page2 from './OnboardingPage2';
import Page3 from './OnboardingPage3';
import Page4 from './OnboardingPage4';
import { createHome, createHomeOwner } from '../../graphql/mutations';

const Onboarding: React.FC = () => {
  const [page, setPage] = useState('page1');
  const [homeData, setHomeData] = useState(homeInfo);
  const { setAppState } = useContext(AppContext);

  useEffect(() => {
    const addHome = async () => {
      const result = await API.graphql({
        query: createHome,
        variables: { input: homeData },
      });
      // console.log(result);
      console.log(result.data.createHome);
      const homeOwner = await API.graphql({
        query: createHomeOwner,
        variables: {
          input: {
            homeID: result.data.createHome.id,
            homeOwnerID: result.data.createHome.owner,
          },
        },
      });
    };

    if (page === 'submit') {
      // submit home info to backend here
      console.log(homeData);
      addHome();
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
