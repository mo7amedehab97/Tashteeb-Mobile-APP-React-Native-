import { View, Text } from "react-native";
import styled from "styled-components/native";

const TitleContainer = styled.View`
  margin-top: 15%;
  margin-left: 32px;
`;
const Title = ({ title }) => {
  return (
    <TitleContainer>
      <Text
        style={{
          fontSize: 36,
          fontFamily: "PoppinsSemiBold",
          color: "#fff",
          letterSpacing: 2,
        }}
      >
        {title}
      </Text>
    </TitleContainer>
  );
};

export default Title;
