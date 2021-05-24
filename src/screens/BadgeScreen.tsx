/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
// import { AppContext } from '../contexts/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { styles } from '../styles/BadgeScreenStyles';
// import { printIntrospectionSchema } from 'graphql';
// import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { ResponseContext } from '../contexts/ResponseContext';

/** ALL THE OTHER THINGS */

/**
 * for the badge page stack navigator the below lines define types for params and for stack props
 */
type BadgeStackParams = {
  Home: undefined;
  Collection: { level: string };
  Detail: { badgeName: string };
};
const BadgeStack = createStackNavigator<BadgeStackParams>();
type Props = StackScreenProps<BadgeStackParams, 'Collection'>;

/**
 * returns the light green header that remains on the first two badge screens
 */
function Header() {
  return (
    <View>
      <Text style={styles.titleText}>BADGE COLLECTION</Text>
      <Text style={styles.subTitleText}>
        Complete more tasks to unlock a new badge and make your home more green!
      </Text>
    </View>
  );
}

/**
 * returns a touchable opacity that includes the badge level and view all text. touching
 * the component navigates the user to the 'Collection' screen where they can see badges by level
 *
 * @params
 * stacknav: stack navigator prop
 * badgeLevel: the difficulty category ("Starer", "Intermediate", "Guru")
 */
function BadgeButton({ props }: any) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        props.stacknav.push('Collection', { level: props.badgeLevel })
      }
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.badgeLevelText}>{props.badgeLevel}</Text>
        </View>
        <View>
          <Text style={styles.viewAllText}>View All +</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

/** ALL THE PAGES */

/**
 * returns the badge's first/home page which includes three touchableopacity buttons to
 * navigate to the badge collection page
 *
 * @params
 * navigation: the stack navigator navigation prop
 */
function BadgeHome({ navigation }: Props) {
  return (
    <View style={styles.homePage}>
      <BadgeButton stacknav={navigation} badgeLevel="Starter" />
      <BadgeButton stacknav={navigation} badgeLevel="Intermediate" />
      <BadgeButton stacknav={navigation} badgeLevel="Guru" />
    </View>
  );
}

/**
 * returns the badge second/collection page which includes a view of all badges by a given
 * by level
 *
 * @params
 * navigation: the stack navigator navigaton prop
 * route: the route prop that includes the level (starter, intermediate, guru) in its params field
 */
function BadgeCollection({ navigation, route }: Props) {
  const badgeLevel = route.params.level;
  return (
    <View>
      <Text style={styles.badgeLevelText}>{badgeLevel}</Text>
      {/* <TouchableOpacity
        style={{backgroundColor: 'red', borderRadius: 100, width: 50, height: 50, marginTop: 20, marginLeft: 20}}
        onPress={() => navigation.push('Detail', { badgeName: 'tmp' })}
        >
        <Text></Text>
        <Text>  TMP</Text>
      </TouchableOpacity> */}
      <Text>{}</Text>
    </View>
  );
}

/**
 * @NOT_YET_COMPLETED
 * returns the congratulations screen for a particular badge
 *
 * @params
 * props.badgeName: the name of the badge to display the congrats screen for
 */
function BadgeDetail(props: any) {
  return (
    <View
      style={{ backgroundColor: '#86C5BE', height: '100%', width: '100%' }}
    />
  );
}

/**
 * @returns home page screen including navigation options to view different badge levels
 * and see each badge in greater detail
 */
export function BadgeScreen() {
  // const { appState } = useContext(AppContext)

  return (
    <NavigationContainer independent>
      <BadgeStack.Navigator>
        <BadgeStack.Screen
          name="Home"
          component={BadgeHome}
          options={{
            headerTitle: props => <Header />,
            headerStyle: styles.header,
          }}
        />
        <BadgeStack.Screen
          name="Collection"
          component={BadgeCollection}
          options={{
            headerTitle: props => <Header />,
            headerStyle: styles.header,
          }}
        />
        <BadgeStack.Screen
          name="Detail"
          component={BadgeDetail}
          options={{
            headerTitle: 'CONGRATULATIONS',
            headerTruncatedBackTitle: 'false',
            headerStyle: styles.header,
          }}
        />
      </BadgeStack.Navigator>
    </NavigationContainer>
  );
}
