import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Progress from "react-native-progress";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../../styles/OnboardingStyles";
import { homeInfo } from "./onboardingData";

interface Props {
  setPage(page: string): void;
  setHomeData({}): void;
  homeData: typeof homeInfo;
}

const Page2: React.FC<Props> = ({ setPage, setHomeData, homeData }) => {
  const [livableArea, setSquareFeet] = useState(String(homeData.livableArea));
  const [outDoorArea, setOutdoor] = useState(String(homeData.outDoorArea));
  const [bedroomCount, setBedrooms] = useState(String(homeData.bedroomCount));
  const [bathroomCount, setBathrooms] = useState(
    String(homeData.bathroomCount)
  );

  const previousPage = () => {
    setPage("page1");
    setHomeData({
      ...homeData,
      livableArea: parseInt(livableArea),
      outDoorArea: parseInt(outDoorArea),
      bedroomCount: parseInt(bedroomCount),
      bathroomCount: parseInt(bathroomCount),
    });
  };

  const nextPage = () => {
    setPage("page3");
    console.log(parseInt(livableArea));
    setHomeData({
      ...homeData,
      livableArea: parseInt(livableArea),
      outDoorArea: parseInt(outDoorArea),
      bedroomCount: parseInt(bedroomCount),
      bathroomCount: parseInt(bathroomCount),
    });
  };

  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      extraScrollHeight={25}
      contentContainerStyle={{ flexGrow: 1, height: 800 }}
      scrollToOverflowEnabled
    >
      <View style={{ alignItems: "center" }}>
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
            <Text style={{ paddingVertical: "5%" }}>2 of 4</Text>
            <Progress.Bar
              progress={0.5}
              width={null}
              color="rgba(233, 102, 97, 1)"
              style={{ width: "90%" }}
            />
            <Text style={styles.formTitle}>Home Size</Text>
            <Text style={styles.formComponent}>
              Liveable Square Feet of Home *
            </Text>
            <TextInput
              style={styles.formInput}
              value={livableArea}
              onChangeText={setSquareFeet}
              keyboardType="number-pad"
            />
            <Text style={styles.formComponent}>
              Size of Outdoor Area (excluding home)
            </Text>
            <TextInput
              style={styles.formInput}
              value={outDoorArea}
              onChangeText={setOutdoor}
              keyboardType="number-pad"
            />
            <Text style={styles.formComponent}>Number of Bedrooms</Text>
            <TextInput
              style={styles.formInput}
              value={bedroomCount}
              onChangeText={setBedrooms}
              keyboardType="number-pad"
            />
            <Text style={styles.formComponent}>Number of Bathrooms</Text>
            <TextInput
              style={styles.formInput}
              value={bathroomCount}
              onChangeText={setBathrooms}
              keyboardType="number-pad"
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#E96661",
                marginTop: "25%",
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
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Page2;
