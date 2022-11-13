import {
  View,
  Text,
  Image,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  background-color: #1d202f;
  height: 100%;
  display: flex;
  padding-top: 32px;
`;
const LogoContainer = styled.View`
  margin-top: 32px;
  padding-left: 32px;
  position: relative;
`;
const ButtonContainer = styled.View`
  margin-top: 25%;
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
            width: 30,
            height: 30,
            position: "absolute",
            top: "20%",
            left: "55%",
          }}
          resizeMode="contain"
        />
      </LogoContainer>
      <View
        style={{
          marginTop: "30%",
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
              color: "#FFF",
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
          <TouchableOpacity>
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
