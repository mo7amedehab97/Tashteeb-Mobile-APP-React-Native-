import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import {
  NavigationContainer,
  validatePathConfig,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./screens/OnboradingScreen";
import LoginScreen from "./screens/LoginScreen";
import { useFonts } from "expo-font";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getData from "./assets/config/asyncStoreage";
import DetailsPage from "./screens/DetailsPage";
import { ContextProvider } from "./Context/Context";

const AppStack = createStackNavigator();
export default function App() {
  const [status, setStatus] = useState();
  const [userAuthed, setUserAuthed] = useState("");

  useEffect(() => {
    const changeStatus = async () => {
      const jsonValue = await AsyncStorage.getItem("firstLunch");
      const jsonValue2 = await AsyncStorage.getItem("accessToken");
      setUserAuthed(JSON.parse(jsonValue2)?.email);
      setStatus(JSON.parse(jsonValue)?.isFirstLunch);
    };
    changeStatus();
  }, []);
  const [loaded] = useFonts({
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ContextProvider>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <StatusBar backgroundColor="#1D202F" style="light" />
        {status ? (
          <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
              <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
              <AppStack.Screen name="Login" component={LoginScreen} />
              <AppStack.Screen name="SignIn" component={SignInScreen} />
              <AppStack.Screen name="SignUp" component={SignUpScreen} />
              <AppStack.Screen name="Home" component={HomeScreen} />
            </AppStack.Navigator>
          </NavigationContainer>
        ) : userAuthed != "" ? (
          <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
              <AppStack.Screen name="Home" component={HomeScreen} />
              <AppStack.Screen name="Details" component={DetailsPage} />
            </AppStack.Navigator>
          </NavigationContainer>
        ) : (
          <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
              <AppStack.Screen name="Login" component={LoginScreen} />
              <AppStack.Screen name="SignIn" component={SignInScreen} />
              <AppStack.Screen name="SignUp" component={SignUpScreen} />
              <AppStack.Screen name="Home" component={HomeScreen} />
            </AppStack.Navigator>
          </NavigationContainer>
        )}
      </View>
    </ContextProvider>
  );
}
