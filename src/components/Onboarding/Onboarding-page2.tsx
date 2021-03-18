import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Progress from "react-native-progress";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../../styles/OnboardingStyles";

const Page2 = ({ setPage, setHomeData }) => {
  return (
    <KeyboardAwareScrollView keyboardOpeningTime={0} extraScrollHeight={25}>
      <SafeAreaView
        style={{ alignItems: "center", justifyContent: "flex-start" }}
      >
        <View style={styles.background} />
        <View style={styles.formContainer}>
          <Text style={styles.title}>Home Info</Text>
          <Text style={styles.description}>
            Complete the following questions about your current home.
          </Text>

          <View style={styles.form}>
            <Text style={{ paddingVertical: "5%" }}>2 of 4</Text>
            <Progress.Bar
              progress={0.5}
              width={null}
              color="rgba(233, 102, 97, 1)"
              style={{ width: "90%" }}
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
                alignSelf: "center",
                borderColor: "gray",
                borderWidth: 1,
                width: "90%",
                borderRadius: 5,
                paddingLeft: "2.5%",
              }}
              containerStyle={{ height: 40 }}
              items={[{ label: "CA", value: "CA" }]}
              dropDownStyle={{ width: "90%" }}
              itemStyle={{ justifyContent: "flex-start", paddingLeft: "2%" }}
              placeholder=""
            />
            <Text style={styles.formComponent}>Year Home was Built</Text>
            <DropDownPicker
              style={{
                alignSelf: "center",
                borderColor: "gray",
                borderWidth: 1,
                width: "90%",
                borderRadius: 5,
                paddingLeft: "2.5%",
              }}
              containerStyle={{ height: 40 }}
              items={[{ label: "2020", value: "2020" }]}
              dropDownStyle={{ width: "90%" }}
              itemStyle={{ justifyContent: "flex-start", paddingLeft: "2%" }}
              placeholder=""
            />
            <TouchableOpacity style={styles.button}>
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
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
