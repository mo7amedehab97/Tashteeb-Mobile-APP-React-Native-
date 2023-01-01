import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";

const InputContainer = styled.View`
  border-top: 1px solid green;
  width: 75%;
  margin-left: 32px;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  margin-top: 10%;
  justify-content: space-evenly;
`;
const Input = styled.TextInput`
  width: 100%;
  padding-left: 16px;
`;
const SignInInput = ({ placeholder, icon, secureTextEntry, onChangeText }) => {
  const [isFocused, setIsFocused] = useState(true);
  const [isShowed, setIsShowed] = useState(true);
  const changeVisibility = () => {
    setIsShowed(!isShowed);
  };
  const handleFocus = () => {
    setIsFocused(false);
  };

  return (
    <InputContainer
      style={{
        borderBottomColor: isFocused ? "#ddd" : "#EDB820",
        borderBottomWidth: 1.2,
        marginBottom: 10,
      }}
    >
      <AntDesign name={icon} solid size={16} color="#ddd" />

      <Input
        placeholder={placeholder}
        placeholderTextColor="#ddd"
        onFocus={handleFocus}
        style={{
          color: "#ddd",
          fontSize: 16,
          letterSpacing: 2,
          padding: 5,
          fontFamily: "PoppinsRegular",
        }}
        secureTextEntry={isShowed ? secureTextEntry : false}
        onChangeText={onChangeText}
      />
      {placeholder === "Password" ? (
        <TouchableOpacity onPress={changeVisibility}>
          <AntDesign name={"eye"} solid size={16} color="#ddd" style={{}} />
        </TouchableOpacity>
      ) : null}
    </InputContainer>
  );
};

export default SignInInput;
