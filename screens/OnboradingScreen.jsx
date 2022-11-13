import Onboarding from "react-native-onboarding-swiper";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16, color: "#fff" }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16, color: "#fff" }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16, color: "#fff" }}>Done</Text>
  </TouchableOpacity>
);

const OnboradingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#1D202F",
          image: <Image source={require("../assets/Tashteeb.png")} />,
          title: "Connect to the World",
          subtitle: " The Best New Way To Connect With The World",
        },
        {
          backgroundColor: "#1D202F",
          image: <Image source={require("../assets/Tashteeb2.png")} />,
          title: "All What Your Home Need ",
          subtitle: "Find Best Engineers & Best tools",
        },
      ]}
    />
  );
};

export default OnboradingScreen;
