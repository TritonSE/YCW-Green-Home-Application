import React, { useState } from "react";
import { SafeAreaView, Text, Image, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Progress from "react-native-progress";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../../styles/OnboardingStyles";
import { homeInfo } from "./onboardingData";
import { HeatingFuelType, WaterHeaterFuelType, AgeType } from "../../API";
import { useNavigation } from "@react-navigation/core";

interface Props {
  setPage(page: string): void;
  setHomeData({}): void;
  homeData: typeof homeInfo;
}

const Page3: React.FC<Props> = ({ setHomeData, homeData }) => {
  const [heatingFuelType, setHeatingFuelType] = useState<HeatingFuelType>();
  const [heaterAge, setHeaterAge] = useState("make dropdown");
  const [
    waterHeaterFuelType,
    setWaterFuelType,
  ] = useState<WaterHeaterFuelType>();
  const [waterHeaterAge, setWaterHeaterAge] = useState("make dropdown");
  const [annualWaterUsage, setWaterUse] = useState(
    String(homeData.annualWaterUsage)
  );

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
    navigation.navigate("Page 4");

    let heaterAgeValue: AgeType;
    if (parseInt(heaterAge, 10) < 5) {
      heaterAgeValue = AgeType.LESS_THAN_5;
    } else if (parseInt(heaterAge, 10) >= 5 && parseInt(heaterAge, 10) < 10) {
      heaterAgeValue = AgeType.MORE_THAN_5;
    } else if (parseInt(heaterAge, 10) >= 10 && parseInt(heaterAge, 10) < 20) {
      heaterAgeValue = AgeType.MORE_THAN_10;
    } else {
      heaterAgeValue = AgeType.MORE_THAN_20;
    }

    let waterHeaterAgeValue: AgeType;
    if (parseInt(waterHeaterAge, 10) < 5) {
      waterHeaterAgeValue = AgeType.LESS_THAN_5;
    } else if (
      parseInt(waterHeaterAge, 10) >= 5 &&
      parseInt(waterHeaterAge, 10) < 10
    ) {
      waterHeaterAgeValue = AgeType.MORE_THAN_5;
    } else if (
      parseInt(waterHeaterAge, 10) >= 10 &&
      parseInt(waterHeaterAge, 10) < 20
    ) {
      waterHeaterAgeValue = AgeType.MORE_THAN_10;
    } else {
      waterHeaterAgeValue = AgeType.MORE_THAN_20;
    }

    setHomeData({
      ...homeData,
      heatingFuelType,
      heaterAge: heaterAgeValue,
      waterHeaterFuelType,
      waterHeaterAge: waterHeaterAgeValue,
      annualWaterUsage,
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
        style={{ alignItems: "center", justifyContent: "flex-start" }}
      >
        <View style={styles.background} />
        <View style={styles.formContainer}>
          <TouchableOpacity onPress={previousPage} style={{ paddingTop: 70 }}>
            <Image source={require("../../assets/backButton.png")} />
          </TouchableOpacity>

          <Text
            style={{ ...styles.title, alignSelf: "center", marginTop: -25 }}
          >
            Home Info
          </Text>
          <Text style={styles.description}>
            Complete the following questions about your current home.
          </Text>

          <View style={styles.form}>
            <Text style={{ paddingVertical: "5%" }}>3 of 4</Text>
            <Progress.Bar
              progress={0.75}
              width={null}
              color="rgba(233, 102, 97, 1)"
              style={{ width: "90%" }}
            />
            <Text style={styles.formTitle}>Heating Information</Text>

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
                alignSelf: "center",
                borderColor: "gray",
                borderWidth: 1,
                width: "90%",
                borderRadius: 5,
                paddingLeft: "2.5%",
              }}
              containerStyle={{ height: 40 }}
              items={[
                { label: "Gas", value: WaterHeaterFuelType.GAS },
                { label: "Electric", value: WaterHeaterFuelType.ELECTRIC },
                { label: "Other", value: WaterHeaterFuelType.OTHER },
              ]}
              dropDownStyle={{ width: "90%" }}
              itemStyle={{ justifyContent: "flex-start", paddingLeft: "2%" }}
              placeholder=""
              onChangeItem={(item) => setWaterFuelType(item.value)}
              // defaultValue={homeData.waterHeaterFuelType}
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
              value={annualWaterUsage}
              onChangeText={setWaterUse}
              keyboardType="number-pad"
            />
            <Text style={styles.formComponent}>Heating Fuel Type</Text>
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
              items={[
                { label: "Gas", value: HeatingFuelType.GAS },
                { label: "Electric", value: HeatingFuelType.ELECTRIC },
                { label: "Propane", value: HeatingFuelType.PROPANE },
                { label: "Other", value: HeatingFuelType.OTHER },
              ]}
              dropDownStyle={{ width: "90%" }}
              itemStyle={{ justifyContent: "flex-start", paddingLeft: "2%" }}
              placeholder=""
              onChangeItem={(item) => setHeatingFuelType(item.value)}
              // defaultValue={homeData.heatingFuelType}
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

export default Page3;
