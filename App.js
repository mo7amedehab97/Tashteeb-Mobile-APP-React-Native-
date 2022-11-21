import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./screens/OnboradingScreen";
import LoginScreen from "./screens/LoginScreen";
import { useFonts } from "expo-font";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";

import store from "./redux/store";
import { Provider } from "react-redux";

const AppStack = createStackNavigator();
export default function App() {
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
    <Provider store={store}>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <StatusBar backgroundColor="#1D202F" />
        <NavigationContainer>
          <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
            <AppStack.Screen name="Login" component={LoginScreen} />
            <AppStack.Screen name="SignIn" component={SignInScreen} />
            <AppStack.Screen name="SignUp" component={SignUpScreen} />
            <AppStack.Screen name="Home" component={HomeScreen} />
          </AppStack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}
