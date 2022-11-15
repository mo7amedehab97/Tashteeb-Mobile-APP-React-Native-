import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import Title from "../components/Title";
import SignInInput from "../components/SignInInput";
import AuthButton from "../components/AuthButton";

const SignInContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #1d202f;
`;
const ArrowContainer = styled.View`
  margin-top: 25%;
  margin-left: 32px;
`;
const OtherLinks = styled.View`
  margin-top: 10%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const SignInScreen = ({ navigation }) => {
  return (
    <SignInContainer>
      <ArrowContainer>
        <FontAwesome5 name={"arrow-left"} brand size={24} color="#fff" />
      </ArrowContainer>

      <Title title="Log In" />
      <SignInInput placeholder="User Name" icon="user" />
      <SignInInput placeholder="Password" icon="lock" secureTextEntry={true} />
      <AuthButton name="Log In" />

      <OtherLinks>
        <Text
          style={{
            color: "#fff",
            fontFamily: "PoppinsRegular",
            letterSpacing: 2,
            fontSize: 14,
          }}
        >
          first time here ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              color: "#EDB820",
              fontFamily: "PoppinsRegular",
              letterSpacing: 1,
              fontSize: 14,
              marginLeft: 5,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </OtherLinks>
    </SignInContainer>
  );
};

export default SignInScreen;
