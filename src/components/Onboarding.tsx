import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';

const Onboarding = () => {
  const styles = StyleSheet.create({
    formContainer: {
      position: 'absolute',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '90%',
    },
    title: {
      fontSize: 26,
      paddingTop: '20%',
    },
    description: {
      fontSize: 16,
      paddingTop: '5%',
      textAlign: 'center',
      paddingBottom: '10%',
      flexWrap: 'wrap',
    },
    background: {
      width: '100%',
      height: '100%',
      marginTop: '105%',
      backgroundColor: '#86C5BE',
    },
    form: {
      position: 'absolute',
      borderWidth: 1,
      borderRadius: 20,
      height: '315%',
      width: '100%',
      backgroundColor: '#fff',
      borderColor: '#6C6B6B',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: '55%',
    },
    formTitle: {
      paddingTop: '5%',
      alignSelf: 'flex-start',
      paddingLeft: '5%',
      fontSize: 18,
    },
    formComponent: {
      paddingTop: '5%',
      alignSelf: 'flex-start',
      paddingLeft: '5%',
      fontSize: 16,
      color: '#6C6B6B',
      paddingBottom: '2.5%',
    },
    formInput: {
      alignSelf: 'center',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '90%',
      borderRadius: 5,
      paddingLeft: '2.5%',
    },
    button: {
      backgroundColor: '#E96661',
      marginTop: '5%',
      width: 136,
      height: 35,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
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
            <Text style={{ paddingVertical: '5%' }}>1 of 4</Text>
            <Progress.Bar
              progress={0.25}
              width={null}
              color="red"
              style={{ width: '90%' }}
            />
            <Text style={styles.formTitle}>Basic Information</Text>
            <Text style={styles.formComponent}>Zip Code *</Text>
            <TextInput style={styles.formInput} value="" />
            <Text style={styles.formComponent}>Address *</Text>
            <TextInput style={styles.formInput} value="" />
            <Text style={styles.formComponent}>City</Text>
            <TextInput style={styles.formInput} value="" />
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
              items={[{ label: 'CA', value: 'CA' }]}
              dropDownStyle={{ width: '90%' }}
              itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
              placeholder=""
            />
            <Text style={styles.formComponent}>Year Home was Built</Text>
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
              items={[{ label: '2020', value: '2020' }]}
              dropDownStyle={{ width: '90%' }}
              itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
              placeholder=""
            />
            <TouchableOpacity style={styles.button}>
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

export default Onboarding;
