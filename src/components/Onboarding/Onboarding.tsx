import React, { useContext, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { AppContext } from "../../contexts/AppContext";
import { homeInfo } from "./onboardingData";
import Page1 from "./OnboardingPage1";
import Page2 from "./OnboardingPage2";
import Page3 from "./OnboardingPage3";
import Page4 from "./OnboardingPage4";
import { createHome, createHomeOwner } from "../../graphql/mutations";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Onboarding: React.FC = () => {
  const [page, setPage] = useState("");
  const [homeData, setHomeData] = useState(homeInfo);
  const { setAppState } = useContext(AppContext);

  useEffect(() => {
    const addHome = async () => {
      const result = await API.graphql({
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
    };

    if (page === "submit") {
      addHome();
      setAppState("App");
    }
  }, [page, homeData, setAppState]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Page 1"
        children={() => <Page1 setHomeData={setHomeData} homeData={homeData} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page 2"
        children={() => <Page2 setHomeData={setHomeData} homeData={homeData} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page 3"
        children={() => <Page3 setHomeData={setHomeData} homeData={homeData} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page 4"
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
    // {page === 'page1' && (

    // )}
    // {page === 'page2' && (
    //   <Page2
    //     setPage={setPage}
    //     setHomeData={setHomeData}
    //     homeData={homeData}
    //   />
    // )}
    // {page === 'page3' && (
    //   <Page3
    //     setPage={setPage}
    //     setHomeData={setHomeData}
    //     homeData={homeData}
    //   />
    // )}
    // {page === 'page4' && (
    //   <Page4
    //     setPage={setPage}
    //     setHomeData={setHomeData}
    //     homeData={homeData}
    //   />
    // )}
  );
};

export default Onboarding;
