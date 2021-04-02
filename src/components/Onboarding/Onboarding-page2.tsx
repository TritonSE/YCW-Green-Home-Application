import React, { useState } from 'react';
import { SafeAreaView, Image, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../../styles/OnboardingStyles';

interface Props {
  setPage(page: string): void;
  setHomeData({}): void;
  homeData: Record<string, string>;
}

const Page2: React.FC<Props> = ({ setPage, setHomeData, homeData }) => {
  const [squareFeet, setSquareFeet] = useState(homeData.squareFeet);
  const [outdoor, setOutdoor] = useState(homeData.outdoor);
  const [bedrooms, setBedrooms] = useState(homeData.bedrooms);
  const [bathrooms, setBathrooms] = useState(homeData.bathrooms);

  const previousPage = () => {
    setPage('page1');
    setHomeData({
      ...homeData,
      squareFeet,
      outdoor,
      bedrooms,
      bathrooms,
    });
  };

  const nextPage = () => {
    setPage('page3');
    setHomeData({
      ...homeData,
      squareFeet,
      outdoor,
      bedrooms,
      bathrooms,
    });
  };

  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      extraScrollHeight={25}
      contentContainerStyle={{ flexGrow: 1, height: '125%' }}
      scrollToOverflowEnabled
    >
      <SafeAreaView
        style={{ alignItems: 'center', justifyContent: 'flex-start' }}
      >
        <View style={styles.background} />
        <View style={styles.formContainer}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: '20%',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity onPress={previousPage} style={{ flex: 1 }}>
              <Image source={require('../../assets/backButton.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Home Info</Text>
          </View>
          <Text style={styles.description}>
            Complete the following questions about your current home.
          </Text>

          <View style={styles.form}>
            <Text style={{ paddingVertical: '5%' }}>2 of 4</Text>
            <Progress.Bar
              progress={0.5}
              width={null}
              color="rgba(233, 102, 97, 1)"
              style={{ width: '90%' }}
            />
            <Text style={styles.formTitle}>Home Size</Text>
            <Text style={styles.formComponent}>
              Liveable Square Feet of Home *
            </Text>
            <TextInput
              style={styles.formInput}
              value={squareFeet}
              onChangeText={setSquareFeet}
              keyboardType="number-pad"
            />
            <Text style={styles.formComponent}>
              Size of Outdoor Area (excluding home)
            </Text>
            <TextInput
              style={styles.formInput}
              value={outdoor}
              onChangeText={setOutdoor}
              keyboardType="number-pad"
            />
            <Text style={styles.formComponent}>Number of Bedrooms</Text>
            <TextInput
              style={styles.formInput}
              value={bedrooms}
              onChangeText={setBedrooms}
              keyboardType="number-pad"
            />
            <Text style={styles.formComponent}>Number of Bathrooms</Text>
            <TextInput
              style={styles.formInput}
              value={bathrooms}
              onChangeText={setBathrooms}
              keyboardType="number-pad"
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#E96661',
                marginTop: '25%',
                width: 136,
                height: 35,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={nextPage}
            >
              <Text
                style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Page2;
