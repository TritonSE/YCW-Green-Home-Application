import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Progress from "react-native-progress";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../../styles/OnboardingStyles";

interface Props {
  setPage(page: string): void;
  setHomeData(data: object): void;
  homeData: object;
}

const Page1: React.FC<Props> = ({ setPage, setHomeData, homeData }) => {
  const states = [
    { label: "AK", value: "AK" },
    { label: "AL", value: "AL" },
    { label: "AR", value: "AR" },
    { label: "AZ", value: "AZ" },
    { label: "CA", value: "CA" },
    { label: "CO", value: "CO" },
    { label: "CT", value: "CT" },
    { label: "DC", value: "DC" },
    { label: "DE", value: "DE" },
    { label: "FL", value: "FL" },
    { label: "GA", value: "GA" },
    { label: "HI", value: "HI" },
    { label: "IA", value: "IA" },
    { label: "ID", value: "ID" },
    { label: "IL", value: "IL" },
    { label: "IN", value: "IN" },
    { label: "KS", value: "KS" },
    { label: "KY", value: "KY" },
    { label: "LA", value: "LA" },
    { label: "MA", value: "MA" },
    { label: "MD", value: "MD" },
    { label: "ME", value: "ME" },
    { label: "MI", value: "MI" },
    { label: "MN", value: "MN" },
    { label: "MO", value: "MO" },
    { label: "MS", value: "MS" },
    { label: "MT", value: "MT" },
    { label: "NC", value: "NC" },
    { label: "ND", value: "ND" },
    { label: "NE", value: "NE" },
    { label: "NH", value: "NH" },
    { label: "NJ", value: "NJ" },
    { label: "NM", value: "NM" },
    { label: "NV", value: "NV" },
    { label: "NY", value: "NY" },
    { label: "OH", value: "OH" },
    { label: "OK", value: "OK" },
    { label: "OR", value: "OR" },
    { label: "PA", value: "PA" },
    { label: "RI", value: "RI" },
    { label: "SC", value: "SC" },
    { label: "SD", value: "SD" },
    { label: "TN", value: "TN" },
    { label: "TX", value: "TX" },
    { label: "UT", value: "UT" },
    { label: "VA", value: "VA" },
    { label: "VT", value: "VT" },
    { label: "WA", value: "WA" },
    { label: "WI", value: "WI" },
    { label: "WV", value: "WV" },
    { label: "WY", value: "WY" },
  ];

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [year, setYear] = useState("");
  const [state, setState] = useState({ label: "", value: "" });
  const nextPage = () => {
    setPage("page2");
    setHomeData({
      ...homeData,
      zipCode: parseInt(zipcode),
      address,
      city,
      state: state.value,
      year: parseInt(year),
    });
  };

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
            <Text style={{ paddingVertical: "5%" }}>1 of 4</Text>
            <Progress.Bar
              progress={0.25}
              width={null}
              color="rgba(233, 102, 97, 1)"
              style={{ width: "90%" }}
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
                alignSelf: "center",
                borderColor: "gray",
                borderWidth: 1,
                width: "90%",
                borderRadius: 5,
                paddingLeft: "2.5%",
              }}
              containerStyle={{ height: 40 }}
              items={states}
              dropDownStyle={{ width: "90%" }}
              itemStyle={{ justifyContent: "flex-start", paddingLeft: "2%" }}
              placeholder=""
              onChangeItem={(item) => setState(item)}
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

export default Page1;
