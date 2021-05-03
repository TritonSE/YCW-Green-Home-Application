import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/core';
import styles from '../../styles/OnboardingStyles';
import {
  HeatingFuelType,
  WaterHeaterFuelType,
  AgeType,
  CreateHomeInput,
} from '../../API';

interface Props {
  setHomeData({}): void;
  homeData: CreateHomeInput;
}

const Page3: React.FC<Props> = ({ setHomeData, homeData }) => {
  const [heatingFuelType, setHeatingFuelType] = useState<HeatingFuelType>();
  const [heaterAge, setHeaterAge] = useState<AgeType>();
  const [
    waterHeaterFuelType,
    setWaterFuelType,
  ] = useState<WaterHeaterFuelType>();
  const [waterHeaterAge, setWaterHeaterAge] = useState<AgeType>();
  const [annualWaterUsage, setWaterUse] = useState(
    String(homeData.annualWaterUsage),
  );
  const [picker1, setPicker1] = useState(false);
  const [picker2, setPicker2] = useState(false);

  const navigation = useNavigation();

  const previousPage = () => {
    navigation.goBack();
    setHomeData({
      ...homeData,
      heatingFuelType,
      heaterAge,
      waterHeaterFuelType,
      waterHeaterAge,
      annualWaterUsage: parseInt(annualWaterUsage, 10),
    });
  };

  const nextPage = () => {
    setHomeData({
      ...homeData,
      heatingFuelType,
      heaterAge,
      waterHeaterFuelType,
      waterHeaterAge,
      annualWaterUsage,
    });
    navigation.navigate('Page 4');
  };

  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      extraScrollHeight={25}
      contentContainerStyle={{ flexGrow: 1, height: 800 }}
      scrollToOverflowEnabled
    >
      <SafeAreaView
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#fff',
        }}
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

            <Text style={styles.formComponent}>Age of Heater</Text>
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
                { label: 'Less than 5', value: AgeType.LESS_THAN_5 },
                { label: 'More than 5', value: AgeType.MORE_THAN_5 },
                { label: 'More than 10', value: AgeType.MORE_THAN_10 },
                { label: 'More than 20', value: AgeType.MORE_THAN_20 },
              ]}
              dropDownStyle={{ width: '90%' }}
              itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
              placeholder=""
              onChangeItem={item => setHeaterAge(item.value)}
              onOpen={() => setPicker1(true)}
              onClose={() => setPicker1(false)}
            />
            <Text style={styles.formComponent}>Water Heater Fuel Type</Text>
            {!picker1 ? (
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
                  { label: 'Gas', value: WaterHeaterFuelType.GAS },
                  { label: 'Electric', value: WaterHeaterFuelType.ELECTRIC },
                  { label: 'Other', value: WaterHeaterFuelType.OTHER },
                ]}
                dropDownStyle={{ width: '90%' }}
                itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
                placeholder=""
                onChangeItem={item => setWaterFuelType(item.value)}
                onOpen={() => setPicker2(true)}
                onClose={() => setPicker2(false)}
              />
            ) : (
              <Text style={{ height: 40 }} />
            )}
            <Text style={styles.formComponent}>Age of Water Heater</Text>
            {!picker2 ? (
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
                  { label: 'Less than 5', value: AgeType.LESS_THAN_5 },
                  { label: 'More than 5', value: AgeType.MORE_THAN_5 },
                  { label: 'More than 10', value: AgeType.MORE_THAN_10 },
                  { label: 'More than 20', value: AgeType.MORE_THAN_20 },
                ]}
                dropDownStyle={{ width: '90%' }}
                itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
                placeholder=""
                onChangeItem={item => setWaterHeaterAge(item.value)}
              />
            ) : (
              <Text style={{ height: 40 }} />
            )}
            <Text style={styles.formComponent}>Annual Water Use</Text>
            <TextInput
              style={styles.formInput}
              value={annualWaterUsage}
              onChangeText={setWaterUse}
              keyboardType="number-pad"
            />
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
                { label: 'Gas', value: HeatingFuelType.GAS },
                { label: 'Electric', value: HeatingFuelType.ELECTRIC },
                { label: 'Propane', value: HeatingFuelType.PROPANE },
                { label: 'Other', value: HeatingFuelType.OTHER },
              ]}
              dropDownStyle={{ width: '90%' }}
              itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
              placeholder=""
              onChangeItem={item => setHeatingFuelType(item.value)}
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
