import React, { useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import { Auth, I18n, API } from 'aws-amplify';
import { Translations } from '@aws-amplify/ui-components';
import { NavigationContainer } from '@react-navigation/native';
import LoadingView from 'react-native-loading-view';
import Onboarding from './Onboarding/Onboarding';
import AuthenticatorTheme from '../styles/AuthenticatorTheme';
import { AppContext } from '../contexts/AppContext';
import NavFlow from './NavContainer';
import { getUser } from '../graphql/queries';
import { UserContext } from '../contexts/UserContext';
import { QuestionProvider } from '../contexts/QuestionsContext';
import { customResponses } from '../customQueries';
import { ResponseProvider } from '../contexts/ResponseContext';

Auth.configure({ mandatorySignIn: true });

function App(): JSX.Element | null {
  const { appState, setAppState } = useContext(AppContext);
  const { userState, setUserState } = useContext(UserContext);

  useEffect(() => {
    const getUserData = async () => {
      const user = await Auth.currentAuthenticatedUser();
      const result: any = await API.graphql({
        query: getUser,
        variables: { id: user.attributes.sub },
      });
      setUserState(result.data.getUser);
    };
    getUserData();

    if (userState.id === '') {
      setAppState('Loading');
    } else if (userState.homes.items.length === 0 && appState !== 'App') {
      setAppState('Onboarding');
    } else {
      setAppState('App');
    }
  }, [appState, setAppState, userState, setUserState]);

  return (
    <NavigationContainer>
      {appState === 'Onboarding' && <Onboarding />}
      {appState === 'App' && (
        <SafeAreaView style={{ flex: 1 }}>
          <QuestionProvider>
            <ResponseProvider>
              <NavFlow />
            </ResponseProvider>
          </QuestionProvider>
        </SafeAreaView>
      )}
      {appState === 'Loading' && (
        <SafeAreaView style={{ flex: 1 }}>
          <LoadingView loading />
        </SafeAreaView>
      )}
    </NavigationContainer>
  );
}

const MyTheme = { ...AmplifyTheme, ...AuthenticatorTheme };
// Unstable changing section header text: https://github.com/aws-amplify/amplify-js/issues/6115
I18n.putVocabulariesForLanguage('en-US', {
  [Translations.SIGN_IN_HEADER_TEXT]: 'Welcome to Your Clear Way',
  [Translations.SIGN_UP_HEADER_TEXT]: 'Welcome to Your Clear Way',
});

export default withAuthenticator(App, {
  theme: MyTheme,
  usernameAttributes: 'email',
  signUpConfig: {
    hiddenDefaults: ['username', 'phone_number'],
    signUpFields: [
      {
        label: 'Display Name',
        placeholder: 'Enter your display name',
        key: 'custom:displayName',
        required: true,
        displayOrder: 2,
        type: 'string',
      },
      {
        label: 'Email',
        placeholder: 'Enter your email',
        key: 'email',
        required: true,
        displayOrder: 3,
        type: 'string',
      },
      {
        label: 'Password',
        placeholder: 'Enter your password',
        key: 'password',
        required: true,
        displayOrder: 4,
        type: 'password',
      },
    ],
  },
});
