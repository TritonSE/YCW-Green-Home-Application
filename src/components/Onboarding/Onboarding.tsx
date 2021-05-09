import React, { useContext, useEffect, useState } from 'react';
import { API, Auth } from 'aws-amplify';
import { createStackNavigator } from '@react-navigation/stack';
import { AppContext } from '../../contexts/AppContext';
import { homeInfo } from './onboardingData';
import Page1 from './OnboardingPage1';
import Page2 from './OnboardingPage2';
import Page3 from './OnboardingPage3';
import Page4 from './OnboardingPage4';
import {
  createHome,
  createHomeOwner,
  updateHome,
} from '../../graphql/mutations';
import { CreateHomeInput } from '../../API';
import { getUser } from '../../graphql/queries';
import { UserContext } from '../../contexts/UserContext';

const Stack = createStackNavigator();

interface Props {
  homeInformation?: CreateHomeInput;
}

const Onboarding: React.FC<Props> = ({ homeInformation }) => {
  const [page, setPage] = useState('');
  const [homeData, setHomeData] = useState(
    homeInformation !== undefined ? homeInformation : homeInfo,
  );
  const { setAppState } = useContext(AppContext);
  const { setUserState } = useContext(UserContext);

  useEffect(() => {
    const addHome = async () => {
      let result: any;
      if (homeInformation !== undefined) {
        result = await API.graphql({
          query: updateHome,
          variables: { input: homeData },
        });
      } else {
        result = await API.graphql({
          query: createHome,
          variables: { input: homeData },
        });
        await API.graphql({
          query: createHomeOwner,
          variables: {
            input: {
              homeID: result.data.createHome.id,
              homeOwnerID: result.data.createHome.owner,
            },
          },
        });
      }

      const user = await Auth.currentAuthenticatedUser();
      const userData: any = await API.graphql({
        query: getUser,
        variables: { id: user.attributes.sub },
      });
      setUserState(userData.data.getUser);
    };

    if (page === 'submit') {
      addHome();
      setAppState('App');
    }
  }, [page, homeData, setAppState, homeInformation, setUserState]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Page 1"
        children={() => <Page1 setHomeData={setHomeData} homeData={homeData} />} // eslint-disable-line react/no-children-prop
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page 2"
        children={() => <Page2 setHomeData={setHomeData} homeData={homeData} />} // eslint-disable-line react/no-children-prop
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page 3"
        children={() => <Page3 setHomeData={setHomeData} homeData={homeData} />} // eslint-disable-line react/no-children-prop
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page 4"
        // eslint-disable-next-line react/no-children-prop
        children={() => (
          <Page4
            setPage={setPage}
            setHomeData={setHomeData}
            homeData={homeData}
          />
        )}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Onboarding;
