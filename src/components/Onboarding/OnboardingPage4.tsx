import React, { Fragment, useState } from "react";
import { Text, TextInput, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Progress from "react-native-progress";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../../styles/OnboardingStyles";
import { homeInfo } from "./onboardingData";
import { useNavigation } from "@react-navigation/core";
import LoadingView from "react-native-loading-view";

interface Props {
  setPage(page: string): void;
  setHomeData({}): void;
  homeData: typeof homeInfo;
}

const Page4: React.FC<Props> = ({ setPage, setHomeData, homeData }) => {
  const [annualElectricalEnergyUsage, setElectricEnergyUsage] = useState(
    String(homeData.annualElectricalEnergyUsage)
  );
  const [annualGasPropaneEnergyUsage, setGasUsage] = useState(
    String(homeData.annualGasPropaneEnergyUsage)
  );
  const [hasAirConditioner, setAC] = useState(homeData.hasAirConditioner);
  const [hasPool, setPool] = useState(homeData.hasPool);
  const [hasHotTub, setHotTub] = useState(homeData.hasHotTub);

  const [picker1, setPicker1] = useState(false);
  const [picker2, setPicker2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const previousPage = () => {
    navigation.goBack();
    setHomeData({
      ...homeData,
      annualElectricalEnergyUsage: parseInt(annualElectricalEnergyUsage, 10),
      annualGasPropaneEnergyUsage: parseInt(annualGasPropaneEnergyUsage, 10),
      hasAirConditioner,
      hasPool,
      hasHotTub,
    });
  };

  const nextPage = () => {
    setIsLoading(true);
    setPage("submit");
    setHomeData({
      ...homeData,
      annualElectricalEnergyUsage,
      annualGasPropaneEnergyUsage,
      hasAirConditioner,
      hasPool,
      hasHotTub,
    });
  };

  return (
    <Fragment>
      {isLoading ? (
        <LoadingView loading={true}></LoadingView>
      ) : (
        <KeyboardAwareScrollView
          keyboardOpeningTime={0}
          extraScrollHeight={25}
          contentContainerStyle={{ flexGrow: 1, height: 900 }}
          scrollToOverflowEnabled
        >
          <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
            <View style={styles.background} />
            <View style={styles.formContainer}>
              <TouchableOpacity
                onPress={previousPage}
                style={{ paddingTop: 70 }}
              >
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

              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  width: "100%",
                  paddingBottom: "15%",
                  borderColor: "#6C6B6B",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ paddingVertical: "5%" }}>4 of 4</Text>
                <Progress.Bar
                  progress={1}
                  width={null}
                  color="rgba(233, 102, 97, 1)"
                  style={{ width: "90%" }}
                />
                <Text style={styles.formTitle}>Additional Information</Text>
                <Text style={styles.compactFormComponent}>
                  Last Year&apos;s Total Electrical Energy Usage
                </Text>
                <TextInput
                  style={styles.formInput}
                  value={annualElectricalEnergyUsage}
                  onChangeText={setElectricEnergyUsage}
                  keyboardType="number-pad"
                />
                <Text style={styles.compactFormComponent}>
                  Last Year&apos;s Total Gas/Propane Energy Usage
                </Text>
                <TextInput
                  style={styles.formInput}
                  value={annualGasPropaneEnergyUsage}
                  onChangeText={setGasUsage}
                  keyboardType="number-pad"
                />
                <Text style={styles.compactFormComponent}>
                  Air Conditioning
                </Text>
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
                    { label: "Yes", value: "Yes" },
                    { label: "No", value: "No" },
                    { label: "Unsure", value: "Unsure" },
                  ]}
                  dropDownStyle={{ width: "90%" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                    paddingLeft: "2%",
                  }}
                  placeholder=""
                  onChangeItem={(item) => setAC(item.value)}
                  defaultValue={homeData.hasAirConditioner}
                  onOpen={() => setPicker1(true)}
                  onClose={() => setPicker1(false)}
                />

                <Text style={styles.compactFormComponent}>Pool</Text>
                {!picker1 ? (
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
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                      { label: "Unsure", value: "Unsure" },
                    ]}
                    dropDownStyle={{ width: "90%" }}
                    itemStyle={{
                      justifyContent: "flex-start",
                      paddingLeft: "2%",
                    }}
                    placeholder=""
                    onChangeItem={(item) => setPool(item.value)}
                    onOpen={() => setPicker2(true)}
                    onClose={() => setPicker2(false)}
                    defaultValue={homeData.hasPool}
                  />
                ) : (
                  <Text style={{ height: 40 }} />
                )}
                <Text style={styles.compactFormComponent}>Hottub</Text>
                {!picker2 ? (
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
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                      { label: "Unsure", value: "Unsure" },
                    ]}
                    dropDownStyle={{ width: "90%" }}
                    itemStyle={{
                      justifyContent: "flex-start",
                      paddingLeft: "2%",
                    }}
                    placeholder=""
                    onChangeItem={(item) => setHotTub(item.value)}
                    defaultValue={homeData.hasHotTub}
                  />
                ) : (
                  <Text style={{ height: 40 }} />
                )}
                <TouchableOpacity
                  style={{
                    backgroundColor: "#E96661",
                    marginTop: "4%",
                    width: 136,
                    height: 35,
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={nextPage}
                >
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                  >
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      )}
    </Fragment>
  );
};

export default Page4;
