import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../styles/OnboardingStyles';
import states from './states';

interface Props {
  setPage(page: string): void;
  setHomeData({}): void;
  homeData: Record<string, string>;
}

const Page1: React.FC<Props> = ({ setPage, setHomeData, homeData }) => {
  const [zipcode, setZipcode] = useState(homeData.zipCode);
  const [address, setAddress] = useState(homeData.address);
  const [city, setCity] = useState(homeData.city);
  const [year, setYear] = useState(homeData.year);
  const [state, setState] = useState(homeData.state);

  const nextPage = () => {
    setPage('page2');
    setHomeData({
      ...homeData,
      zipCode: zipcode,
      address,
      city,
      state,
      year,
    });
  };

  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      extraScrollHeight={25}
      enableOnAndroid
      contentContainerStyle={{ flexGrow: 1, height: 800 }}
      scrollToOverflowEnabled
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <View style={styles.background} />
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#fff',
            alignItems: 'center',
            width: '90%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text style={{ fontSize: 26, paddingTop: 61 }}>Home Info</Text>
          <Text style={styles.description}>
            Complete the following questions about your current home.
          </Text>

          <View style={styles.form}>
            <Text style={{ paddingVertical: 20 }}>1 of 4</Text>
            <Progress.Bar
              progress={0.25}
              width={null}
              color="rgba(233, 102, 97, 1)"
              style={{ width: '90%' }}
            />
            <Text style={styles.formTitle}>Basic Information</Text>
            <Text style={styles.formComponent}>Zip Code *</Text>
            <TextInput
              style={styles.formInput}
              value={zipcode}
              onChangeText={setZipcode}
              keyboardType="number-pad"
            />
            <Text style={styles.formComponent}>Address *</Text>
            <TextInput
              style={styles.formInput}
              value={address}
              onChangeText={setAddress}
            />
            <Text style={styles.formComponent}>City</Text>
            <TextInput
              style={styles.formInput}
              value={city}
              onChangeText={setCity}
            />
            <Text style={styles.formComponent}>State</Text>
            <DropDownPicker
              style={{
                alignSelf: 'center',
                borderColor: 'gray',
                borderWidth: 1,
                width: '90%',
                borderRadius: 5,
                paddingLeft: '2.5%',
              }}
              containerStyle={{ height: 40 }}
              items={states}
              dropDownStyle={{ width: '90%' }}
              itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
              placeholder=""
              onChangeItem={item => setState(item.value)}
              defaultValue={homeData.state}
            />
            <Text style={styles.formComponent}>Year Home was Built</Text>

            <TextInput
              style={styles.formInput}
              value={year}
              onChangeText={setYear}
              keyboardType="number-pad"
            />

            <TouchableOpacity style={styles.button} onPress={nextPage}>
              <Text
                style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Page1;
