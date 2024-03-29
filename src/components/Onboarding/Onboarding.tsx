import React, { useCallback, useContext, useState } from 'react';
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
import { customGetUser } from '../../customQueries';
import { UserContext } from '../../contexts/UserContext';

const Stack = createStackNavigator();

interface Props {
  homeInformation?: CreateHomeInput;
}

const Onboarding: React.FC<Props> = ({ homeInformation }) => {
  const [homeData, setHomeData] = useState(homeInformation ?? homeInfo);
  const { setAppState } = useContext(AppContext);
  const { setUserState } = useContext(UserContext);

  const addHome = useCallback(async (newHomeData: CreateHomeInput) => {
    let result: any;
    if (homeInformation !== undefined) {
      // updateHomeInput does not have a _deleted field, so we remove it from the input
      // created a copy in case we need the original HomeData object in the future
      const homeDataCopy = newHomeData;
      delete homeDataCopy._deleted;
      result = await API.graphql({
        query: updateHome,
        variables: { input: homeDataCopy },
      });
    } else {
      result = await API.graphql({
        query: createHome,
        variables: { input: newHomeData },
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
      query: customGetUser,
      variables: { id: user.attributes.sub },
    });

    const notDeletedHomes = userData.data.getUser.homes.items.filter(
      (homeOwner: any) => homeOwner.home._deleted !== true,
    );
    userData.data.getUser.homes.items = notDeletedHomes;
    setUserState(userData.data.getUser);
    setAppState('App');
  }, [setAppState, homeInformation, setUserState]);

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
            setHomeData={setHomeData}
            homeData={homeData}
            submitHomeInfo={addHome}
          />
        )}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Onboarding;
