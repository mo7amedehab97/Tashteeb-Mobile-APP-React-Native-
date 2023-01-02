import { View, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

import styled from "styled-components/native";
import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
const Container = styled.View`
  flex: 1;
  background-color: #1d202f;
`;

const DetailsPage = ({ navigation }) => {
  const [total, setTotal] = useState(1);
  const { engData } = useContext(Context);
  console.log(engData, "heredfsdfsd");

  return (
    <Container>
      <View
        style={{
          marginTop: "18%",
          paddingHorizontal: 16,
          flexDirection: "row",

          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <AntDesign name={"arrowleft"} light size={24} color="#fff" />
        </TouchableOpacity>

        <Feather name={"message-circle"} light size={24} color="#fff" />
      </View>
      <View
        style={{
          marginTop: "5%",
        }}
      >
        <Image
          source={{
            uri: engData?.image,
          }}
          resizeMode="contain"
          style={{
            width: "100%",
            height: 350,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}
        />
      </View>
      <View
        style={{
          marginTop: "5%",
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "PoppinsSemiBold",
            fontSize: 18,
            color: "#ddd",
            letterSpacing: 0.5,
          }}
        >
          Hourly Price: {engData?.hourPrice}$
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          marginTop: 8,
        }}
      >
        <Text
          style={{
            color: "#ddd",
            fontFamily: "PoppinsSemiBold",
            fontSize: 18,
            letterSpacing: 0.7,
            textTransform: "capitalize",
          }}
        >
          {engData?.username}{" "}
        </Text>
        <Text
          style={{
            color: "#ddd",
            fontFamily: "PoppinsLight",
            fontSize: 14,
            letterSpacing: 0.7,
            textTransform: "capitalize",
          }}
        >
          {engData.bio}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              backgroundColor: "#EDB820",
              color: "#fff",
              fontFamily: "PoppinsSemiBold",
              fontSize: 18,
              paddingHorizontal: 32,
              paddingVertical: 8,
              borderRadius: 25,
            }}
          >
            Message {engData?.username}
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default DetailsPage;
