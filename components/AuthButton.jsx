import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";

const AuthButtonContainer = styled.TouchableOpacity`
  background-color: #edb820;
  padding: 12px;
  width: 50%;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
const AuthButton = ({ name, LogInRequest }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20%",
      }}
    >
      <AuthButtonContainer onPress={LogInRequest}>
        <Text
          style={{
            color: "#fff",
            fontFamily: "PoppinsBold",
            letterSpacing: 2,
            fontSize: 19,
          }}
        >
          {name}
        </Text>
      </AuthButtonContainer>
    </View>
  );
};

export default AuthButton;
