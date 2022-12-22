import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Title from "../components/Title";
import SignInInput from "../components/SignInInput";
import AuthButton from "../components/AuthButton";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "../assets/config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeObj } from "../assets/config/asyncStoreage";

const SignUpContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #1d202f;
`;
const ArrowContainer = styled.View`
  margin-top: 25%;
  margin-left: 32px;
`;

const SignUpScreen = ({ navigation }) => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const regiester = () => {
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredintial) => {
        const { user } = userCredintial;
        storeObj(user, "accessToken");
        navigation.navigate("Home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <SignUpContainer>
      <ArrowContainer>
        <TouchableOpacity>
          <FontAwesome5 name={"arrow-left"} brand size={24} color="#fff" />
        </TouchableOpacity>
      </ArrowContainer>
      <Title title="New Account" />
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
      <AuthButton name="Sign Up" excuteFuction={regiester} />
    </SignUpContainer>
  );
};

export default SignUpScreen;
