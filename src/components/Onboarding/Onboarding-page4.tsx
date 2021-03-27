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

const Page4: React.FC<Props> = ({ setPage, setHomeData, homeData }) => {
  const [electricEnergyUsage, setElectricEnergyUsage] = useState('');
  const [gasUsage, setGasUsage] = useState('');
  const [AC, setAC] = useState({
    label: '',
    value: '',
  });
  const [pool, setPool] = useState({
    label: '',
    value: '',
  });
  const [hotTub, setHotTub] = useState({
    label: '',
    value: '',
  });
  const [EV, setEV] = useState({
    label: '',
    value: '',
  });
  const [picker1, setPicker1] = useState(false);
  const [picker2, setPicker2] = useState(false);
  const [picker3, setPicker3] = useState(false);
  const nextPage = () => {
    setPage('submit');
    setHomeData({
      ...homeData,
      electricEnergyUsage: parseInt(electricEnergyUsage, 10),
      gasUsage: parseInt(gasUsage, 10),
      AC: AC.value,
      pool: pool.value,
      hotTub: hotTub.value,
      EV: EV.value,
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

          <View
            style={{
              position: 'absolute',
              borderWidth: 1,
              borderRadius: 20,
              height: '330%',
              width: '100%',
              backgroundColor: '#fff',
              borderColor: '#6C6B6B',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: '55%',
            }}
          >
            <Text style={{ paddingVertical: '5%' }}>4 of 4</Text>
            <Progress.Bar
              progress={1}
              width={null}
              color="rgba(233, 102, 97, 1)"
              style={{ width: '90%' }}
            />
            <Text style={styles.formTitle}>Additional Information</Text>
            <Text style={styles.compactFormComponent}>
              Last Year&apos;s Total Electrical Energy Usage
            </Text>
            <TextInput
              style={styles.formInput}
              value={electricEnergyUsage}
              onChangeText={setElectricEnergyUsage}
              keyboardType="number-pad"
            />
            <Text style={styles.compactFormComponent}>
              Last Year&apos;s Total Gas/Propane Energy Usage
            </Text>
            <TextInput
              style={styles.formInput}
              value={gasUsage}
              onChangeText={setGasUsage}
              keyboardType="number-pad"
            />
            <Text style={styles.compactFormComponent}>Air Conditioning</Text>
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
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },
                { label: 'Unsure', value: 'Unsure' },
              ]}
              dropDownStyle={{ width: '90%' }}
              itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
              placeholder=""
              onChangeItem={item => setAC(item)}
              onOpen={() => setPicker1(true)}
              onClose={() => setPicker1(false)}
            />

            <Text style={styles.compactFormComponent}>Pool</Text>
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
                  { label: 'Yes', value: 'Yes' },
                  { label: 'No', value: 'No' },
                  { label: 'Unsure', value: 'Unsure' },
                ]}
                dropDownStyle={{ width: '90%' }}
                itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
                placeholder=""
                onChangeItem={item => setPool(item)}
                zIndex={4000}
                onOpen={() => setPicker2(true)}
                onClose={() => setPicker2(false)}
              />
            ) : (
              <Text style={{ height: 40 }} />
            )}
            <Text style={styles.compactFormComponent}>Hottub</Text>
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
                  { label: 'Yes', value: 'Yes' },
                  { label: 'No', value: 'No' },
                  { label: 'Unsure', value: 'Unsure' },
                ]}
                dropDownStyle={{ width: '90%' }}
                itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
                placeholder=""
                onChangeItem={item => setHotTub(item)}
                onOpen={() => setPicker3(true)}
                onClose={() => setPicker3(false)}
              />
            ) : (
              <Text style={{ height: 40 }} />
            )}
            <Text style={styles.compactFormComponent}>Electric Vehicle</Text>
            {!picker3 ? (
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
                  { label: 'Yes', value: 'Yes' },
                  { label: 'No', value: 'No' },
                  { label: 'Unsure', value: 'Unsure' },
                ]}
                dropDownStyle={{ width: '90%' }}
                itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
                placeholder=""
                onChangeItem={item => setEV(item)}
              />
            ) : (
              <Text style={{ height: 40 }} />
            )}
            <TouchableOpacity
              style={{
                backgroundColor: '#E96661',
                marginTop: '4%',
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
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Page4;
