import { View, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";
import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
const Container = styled.View`
  flex: 1;
  background-color: #1d202f;
`;

const DetailsPage = ({ navigation }) => {
  const [total, setTotal] = useState(1);
  const { data } = useContext(Context);
  console.log(data, "heredfsdfsd");

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

        <AntDesign name={"shoppingcart"} light size={24} color="#fff" />
      </View>
      <View
        style={{
          marginTop: "5%",
        }}
      >
        <Image
          source={{
            uri: data?.image,
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
          Price: {Math.floor(data?.price * total)}$
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#ddd",
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderRadius: 25,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              total <= 1 ? setTotal(1) : setTotal(total - 1);
            }}
          >
            <AntDesign name={"minus"} light size={16} color="#edb820" />
          </TouchableOpacity>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: 8,
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsBold",
                color: "#1d202f",
              }}
            >
              {total}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setTotal(total + 1)}>
            <AntDesign name={"plus"} light size={16} color="#edb820" />
          </TouchableOpacity>
        </View>
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
          title htrere
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
          {data.description}
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
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default DetailsPage;
