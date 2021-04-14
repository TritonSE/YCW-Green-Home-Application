import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../styles/OnboardingStyles';
import { homeInfo } from './onboardingData';

interface Props {
  setPage(page: string): void;
  setHomeData({}): void;
  homeData: typeof homeInfo;
}

const Page3: React.FC<Props> = ({ setPage, setHomeData, homeData }) => {
  const [heatingFuelType, setHeatingFuelType] = useState(homeData.fuelType);
  const [heaterAge, setHeaterAge] = useState(homeData.heaterAge);
  const [waterFuelType, setWaterFuelType] = useState(homeData.waterFuelType);
  const [waterHeaterAge, setWaterHeaterAge] = useState(homeData.waterHeaterAge);
  const [waterUse, setWaterUse] = useState(homeData.waterUse);

  const previousPage = () => {
    setPage('page2');
    setHomeData({
      ...homeData,
      fuelType: heatingFuelType,
      heaterAge,
      waterFuelType,
      waterHeaterAge,
      waterUse,
    });
  };

  const nextPage = () => {
    setPage('page4');
    setHomeData({
      ...homeData,
      fuelType: heatingFuelType,
      heaterAge,
      waterFuelType,
      waterHeaterAge,
      waterUse,
    });
  };

  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      extraScrollHeight={25}
      contentContainerStyle={{ flexGrow: 1, height: 800 }}
      scrollToOverflowEnabled
    >
      <SafeAreaView
        style={{ alignItems: 'center', justifyContent: 'flex-start' }}
      >
        <View style={styles.background} />
        <View style={styles.formContainer}>
          <TouchableOpacity onPress={previousPage} style={{ paddingTop: 70 }}>
            <Image source={require('../../assets/backButton.png')} />
          </TouchableOpacity>

          <Text
            style={{ ...styles.title, alignSelf: 'center', marginTop: -25 }}
          >
            Home Info
          </Text>
          <Text style={styles.description}>
            Complete the following questions about your current home.
          </Text>

          <View style={styles.form}>
            <Text style={{ paddingVertical: '5%' }}>3 of 4</Text>
            <Progress.Bar
              progress={0.75}
              width={null}
              color="rgba(233, 102, 97, 1)"
              style={{ width: '90%' }}
            />
            <Text style={styles.formTitle}>Heating Information</Text>
            <Text style={styles.formComponent}>Heating Fuel Type</Text>
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
              items={[
                { label: 'Gas', value: 'Gas' },
                { label: 'Electric', value: 'Electric' },
                { label: 'Propane', value: 'Propane' },
                { label: 'Other', value: 'Other' },
              ]}
              dropDownStyle={{ width: '90%' }}
              itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
              placeholder=""
              onChangeItem={item => setHeatingFuelType(item.value)}
              defaultValue={homeData.fuelType}
            />
            <Text style={styles.formComponent}>Age of Heater</Text>
            <TextInput
              style={styles.formInput}
              value={heaterAge}
              onChangeText={setHeaterAge}
              keyboardType="number-pad"
            />
            <Text style={styles.formComponent}>Water Heater Fuel Type</Text>
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
              items={[
                { label: 'Gas', value: 'Gas' },
                { label: 'Electric', value: 'Electric' },
                { label: 'Other', value: 'Other' },
              ]}
              dropDownStyle={{ width: '90%' }}
              itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
              placeholder=""
              onChangeItem={item => setWaterFuelType(item.value)}
              defaultValue={homeData.waterFuelType}
            />
            <Text style={styles.formComponent}>Age of Water Heater</Text>
            <TextInput
              style={styles.formInput}
              value={waterHeaterAge}
              onChangeText={setWaterHeaterAge}
              keyboardType="number-pad"
            />
            <Text style={styles.formComponent}>Annual Water Use</Text>
            <TextInput
              style={styles.formInput}
              value={waterUse}
              onChangeText={setWaterUse}
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
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Page3;
