import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import Title from "../components/Title";
import SignInInput from "../components/SignInInput";
import AuthButton from "../components/AuthButton";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/reducers/auth.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "../assets/config/firebase";

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
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const LogInRequest = () => {
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredintial) => {
        const { user } = userCredintial;
navigation.navigate("Home")
      })
      .catch((error) => setError(error));
  };
  return (
    <SignInContainer>
      <ArrowContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <FontAwesome5 name={"arrow-left"} brand size={24} color="#fff" />
        </TouchableOpacity>
      </ArrowContainer>

      <Title title="Log In" />
      <SignInInput
        placeholder="Email"
        icon="user"
        onChangeText={(text) => setUserData({ ...userData, email: text })}
      />
      <SignInInput
        placeholder="Password"
        icon="lock"
        secureTextEntry={true}
        onChangeText={(text) => setUserData({ ...userData, password: text })}
      />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 32,
        }}
      >
        <Text
          style={{
            color: "red",
            fontFamily: "PoppinsRegular",
            fontSize: 18,
          }}
        >
          {error}
        </Text>
      </View>
      <AuthButton name="Log In" excuteFuction={LogInRequest} />

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
