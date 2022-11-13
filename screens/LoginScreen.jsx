import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  background-color: #1d202f;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const LogoContainer = styled.View`
  padding-left: 32px;
  flex-direction: row;
  align-items: center;
`;
const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <LogoContainer>
        <Text
          style={{
            color: "#EDB820",
            fontSize: 32,
            letterSpacing: 2,
            fontFamily: "PoppinsSemiBold",
          }}
        >
          Tashteeb
        </Text>
        <Image
          source={require("../assets/repair-tools.png")}
          style={{
            width: 25,
            height: 25,
            marginHorizontal: 10,
          }}
          resizeMode="contain"
        />
      </LogoContainer>
      <View
        style={{
          paddingLeft: 32,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "PoppinsRegular",
            letterSpacing: 2,
            fontSize: 44,
          }}
        >
          Start
        </Text>
        <Text
          style={{
            color: "#fff",
            letterSpacing: 2,
            fontSize: 44,
            fontFamily: "PoppinsRegular",
          }}
        >
          Your
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 44,
            letterSpacing: 2,
            fontFamily: "PoppinsRegular",
          }}
        >
          Advanture
        </Text>
      </View>
      <ButtonContainer>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          style={{
            backgroundColor: "#EDB820",
            paddingHorizontal: 35,
            paddingVertical: 15,
            borderRadius: 25,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#1D202F",
              fontFamily: "PoppinsRegular",
              letterSpacing: 2,
            }}
          >
            {" "}
            Log In
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "PoppinsRegular",
              letterSpacing: 2,
              fontSize: 14,
            }}
          >
            {" "}
            you don't have an account{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text
              style={{
                color: "#ffc400",
                fontFamily: "PoppinsRegular",
                letterSpacing: 1,
                fontSize: 14,
              }}
            >
              {" "}
              Sign Up Here
            </Text>
          </TouchableOpacity>
        </View>
      </ButtonContainer>
    </Container>
  );
};

export default LoginScreen;
