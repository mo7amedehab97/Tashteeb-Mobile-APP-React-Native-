import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Title from "../components/Title";
import AnimatedMultistep from "react-native-animated-multistep";

import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";
const allSteps = [
  { name: "step 1", component: Step1 },
  { name: "step 2", component: Step2 },
];
const SignUpContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #1d202f;
`;
const ArrowContainer = styled.View`
  margin-top: 25%;
  margin-left: 32px;
`;

const SignUpScreen = () => {
  onNext = () => {
    console.log("Next");
  };

  /* define the method to be called when you go on back step */

  onBack = () => {
    console.log("Back");
  };

  /* define the method to be called when the wizard is finished */

  finish = (finalState) => {
    console.log(finalState);
  };
  return (
    <SignUpContainer>
      <ArrowContainer>
        <TouchableOpacity>
          <FontAwesome5 name={"arrow-left"} brand size={24} color="#fff" />
        </TouchableOpacity>
      </ArrowContainer>
      <Title title="New Account" />

      <AnimatedMultistep
        steps={allSteps}
        onFinish={this.finish}
        onBack={this.onBack}
        onNext={this.onNext}
        comeInOnNext="bounceInUp"
        OutOnNext="bounceOutDown"
        comeInOnBack="bounceInDown"
        OutOnBack="bounceOutUp"
      />
    </SignUpContainer>
  );
};

export default SignUpScreen;
