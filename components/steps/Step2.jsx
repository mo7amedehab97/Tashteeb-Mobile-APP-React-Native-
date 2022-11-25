import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text } from "react-native";
import AddImage from "../AddImage";
import SignInInput from "../SignInInput";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
const NextButton = styled.TouchableOpacity`
  background-color: #edb820;
  padding: 12px;
  width: 50%;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
// import styles from "./styles";

class step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      data: {},
    };
  }
  componentDidMount() {
    console.log(this.state, "did mouuuuuuuunt");
  }
  static getDerivedStateFromProps = (props) => {
    const { getTotalSteps, getCurrentStep } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep(),
    };
  };

  nextStep = () => {
    const { next, saveState } = this.props;
    saveState({ data: this.state.data });

    // Go to next step
    next();
  };

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  render() {
    const { currentStep, totalSteps } = this.state;

    return (
      <View>
        <View
          style={{
            width: "100%",
            alignItems: "flex-end",
            paddingHorizontal: 32,
          }}
        >
          <Text
            style={{
              color: "#ddd",
              fontSize: 16,
              fontFamily: "PoppinsBold",
            }}
          >{` ${currentStep} / ${totalSteps}`}</Text>
        </View>

        <SignInInput
          placeholder="Email"
          icon="at"
          onChangeText={(text) =>
            this.setState({
              ...this.state,
              data: { ...this.state.data, email: text },
            })
          }
        />
        <SignInInput
          placeholder="User Name"
          icon="user"
          onChangeText={(text) =>
            this.setState({
              ...this.state,
              data: { ...this.state.data, userName: text },
            })
          }
        />
        <SignInInput
          placeholder="Password"
          icon="lock"
          onChangeText={(text) =>
            this.setState({
              ...this.state,
              data: { ...this.state.data, password: text },
            })
          }
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NextButton
            onPress={this.nextStep}
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "PoppinsBold",
                letterSpacing: 2,
                fontSize: 19,
              }}
            >
              signUp{" "}
            </Text>
          </NextButton>
          <NextButton
            onPress={this.goBack}
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "PoppinsBold",
                letterSpacing: 2,
                fontSize: 19,
              }}
            >
              Back{" "}
            </Text>
          </NextButton>
        </View>
      </View>
    );
  }
}

export default step2;