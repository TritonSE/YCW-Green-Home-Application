/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
// import { AppContext } from '../contexts/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import styles from '../styles/BadgeScreenStyles';
// import { printIntrospectionSchema } from 'graphql';
// import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { ResponseContext } from '../contexts/ResponseContext';
import { QuestionContext } from '../contexts/QuestionsContext';
// import { Question } from '../models';
import SVGContainer from '../components/SvgContainer';

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
type HomeProps = StackScreenProps<BadgeStackParams, 'Home'>;
type CollectionProps = StackScreenProps<BadgeStackParams, 'Collection'>;
type DetailProps = StackScreenProps<BadgeStackParams, 'Detail'>;
type BadgeButtonProps = {
  stacknav: StackNavigationProp<BadgeStackParams, 'Home'>;
  badgeLevel: string;
};
type Badge = { id: string; title: string; level: string };

function GetBadges() {
  const { responseState } = useContext(ResponseContext);
  const { questionState } = useContext(QuestionContext);

  const responseMap = new Map(
    responseState.items.map(response => [response.questionID, response]),
  );

  const answeredBadges: Badge[] = questionState.items.filter(question =>
    responseMap.has(question.id),
  );
  const unansweredBadges: Badge[] = questionState.items.filter(
    question => !responseMap.has(question.id),
  );

  const starterBadgesAnswered: Badge[] = answeredBadges.filter(
    badge => badge.level === 'STARTER',
  );
  const starterBadgesUnanswered: Badge[] = unansweredBadges.filter(
    badge => badge.level === 'STARTER',
  );

  /** THE FOLLOWING SHOULD BE REMOVED AFTER INSULATED CELLULAR SHADES FIX * */
  for (let i = 0; i < starterBadgesUnanswered.length; i += 1) {
    if (starterBadgesUnanswered[i].title === 'Insular Cellular Shades') {
      starterBadgesUnanswered[i].title = 'Insulated Cellular Shades';
    }
  }

  const intermediateBadgesAnswered: Badge[] = answeredBadges.filter(
    badge => badge.level === 'INTERMEDIATE',
  );
  const intermediateBadgesUnanswered: Badge[] = unansweredBadges.filter(
    badge => badge.level === 'INTERMEDIATE',
  );
  const guruBadgesAnswered: Badge[] = answeredBadges.filter(
    badge => badge.level === 'GURU',
  );
  const guruBadgesUnanswered: Badge[] = unansweredBadges.filter(
    badge => badge.level === 'GURU',
  );

  return {
    Starter: {
      answeredBadges: starterBadgesAnswered,
      unansweredBadges: starterBadgesUnanswered,
      allBadges: starterBadgesAnswered.concat(starterBadgesUnanswered),
    },
    Intermediate: {
      answeredBadges: intermediateBadgesAnswered,
      unansweredBadges: intermediateBadgesUnanswered,
      allBadges: intermediateBadgesAnswered.concat(
        intermediateBadgesUnanswered,
      ),
    },
    Guru: {
      answeredBadges: guruBadgesAnswered,
      unansweredBadges: guruBadgesUnanswered,
      allBadges: guruBadgesAnswered.concat(guruBadgesUnanswered),
    },
  };
}

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
function BadgeButton({ stacknav, badgeLevel }: BadgeButtonProps) {
  const badgesInfo = GetBadges();
  let badges = badgesInfo.Starter;
  if (badgeLevel === 'INTERMEDIATE') {
    badges = badgesInfo.Intermediate;
  } else if (badgeLevel === 'GURU') {
    badges = badgesInfo.Guru;
  }
  let badgePreview = badges.allBadges;
  if (badgePreview.length > 4) {
    badgePreview = badgePreview.slice(0, 4);
  }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => stacknav.push('Collection', { level: badgeLevel })}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.badgeLevelText}>{badgeLevel}</Text>
        </View>
        <View>
          <Text style={styles.viewAllText}>View All +</Text>
        </View>
      </View>
      <View style={styles.badgePreview}>
        {badgePreview.map(badge => (
          <SVGContainer
            key={badge.id}
            badgeTitle={badge.title}
            height="75"
            width="75"
            grayscale={badges.unansweredBadges.indexOf(badge) !== -1}
          />
        ))}
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
function BadgeHome({ navigation }: HomeProps) {
  return (
    <View style={styles.homePage}>
      <BadgeButton stacknav={navigation} badgeLevel="STARTER" />
      <BadgeButton stacknav={navigation} badgeLevel="INTERMEDIATE" />
      <BadgeButton stacknav={navigation} badgeLevel="GURU" />
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
function BadgeCollection({ navigation, route }: CollectionProps) {
  const badgeLevel = route.params.level;
  const badgeInfo = GetBadges();
  let badges = badgeInfo.Starter;
  if (badgeLevel === 'INTERMEDIATE') {
    badges = badgeInfo.Intermediate;
  } else if (badgeLevel === 'GURU') {
    badges = badgeInfo.Guru;
  }

  return (
    <View>
      <ScrollView>
        <Text style={styles.badgeLevelText}>{badgeLevel}</Text>
        <View style={styles.badgeContainer}>
          {badges.allBadges.map(badge => (
            <TouchableOpacity
              key={badge.id}
              style={styles.badgeIcons}
              onPress={() =>
                navigation.push('Detail', { badgeName: badge.title })
              }
            >
              <SVGContainer
                key={badge.id}
                badgeTitle={badge.title}
                height="75"
                width="75"
                grayscale={badges.unansweredBadges.indexOf(badge) !== -1}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
function BadgeDetail({ route }: DetailProps) {
  return (
    <View>
      <Text style={{ fontSize: 50 }}>{route.params.badgeName}</Text>
      <Text>TODO</Text>
    </View>
  );
}

/**
 * @returns home page screen including navigation options to view different badge levels
 * and see each badge in greater detail
 */
export function BadgeScreen(): JSX.Element | null {
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
            headerBackTitle: '',
          }}
        />
        <BadgeStack.Screen
          name="Detail"
          component={BadgeDetail}
          options={{
            headerTitle: 'CONGRATULATIONS',
            headerBackTitle: '',
            headerStyle: styles.header,
          }}
        />
      </BadgeStack.Navigator>
    </NavigationContainer>
  );
}
