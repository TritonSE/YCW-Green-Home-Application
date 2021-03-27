import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../styles/OnboardingStyles';

interface Props {
  setPage(page: string): void;
  setHomeData(data: Record<string, unknown>): void;
  homeData: Record<string, unknown>;
}

const Page3: React.FC<Props> = ({ setPage, setHomeData, homeData }) => {
  const [heatingFuelType, setHeatingFuelType] = useState({
    label: '',
    value: '',
  });
  const [heaterAge, setHeaterAge] = useState('');
  const [waterFuelType, setWaterFuelType] = useState({
    label: '',
    value: '',
  });
  const [waterHeaterAge, setWaterHeaterAge] = useState('');
  const [waterUse, setWaterUse] = useState('');

  const nextPage = () => {
    setPage('page4');
    setHomeData({
      ...homeData,
      fuelType: heatingFuelType.value,
      heaterAge: parseInt(heaterAge, 10),
      waterFuelType: waterFuelType.value,
      waterHeaterAge: parseInt(waterHeaterAge, 10),
      waterUse: parseInt(waterUse, 10),
    });
  };

  return (
    <KeyboardAwareScrollView keyboardOpeningTime={0} extraScrollHeight={25}>
      <SafeAreaView
        style={{ alignItems: 'center', justifyContent: 'flex-start' }}
      >
        <View style={styles.background} />
        <View style={styles.formContainer}>
          <Text style={styles.title}>Home Info</Text>
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
              onChangeItem={item => setHeatingFuelType(item)}
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
              onChangeItem={item => setWaterFuelType(item)}
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
