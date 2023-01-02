import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";
import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import CartProductItem from "../components/CartProductItem";
import Title from "../components/Title";
const Container = styled.View`
  flex: 1;
  background-color: #1d202f;
`;

const CartItems = ({ navigation }) => {
  const { cartItems } = useContext(Context);

  return (
    <Container>
      <View
        style={{
          marginTop: "18%",
          paddingHorizontal: 16,
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <AntDesign name={"arrowleft"} light size={24} color="#fff" />
        </TouchableOpacity>
        <Text
          style={{
            color: "#fff",
            fontFamily: "PoppinsRegular",
            fontSize: 18,
            lineHeight: 21,
            letterSpacing: 2,
            marginLeft: "25%"
        }}
        >
          Cart Items
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          padding: 16,
          height: "65%",
        }}
      >
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={cartItems}
          renderItem={({ item, index }) => (
            <CartProductItem productInfo={item} />
          )}
        />
      </View>
      <View
        style={{
          zIndex: 3,
          marginHorizontal: 16,
          marginVertical: 16,
          borderColor: "#fff",
        }}
      >
        <View>
          <Text
            style={{
              color: "#fff",
              fontFamily: "PoppinsSemiBold",
              borderBottomWidth: 1,
              fontSize: 18,
              borderColor: "#edb820",
              width: "100%",
              letterSpacing: 1,
            }}
          >
            Amount
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "PoppinsRegular",
                fontSize: 16,
              }}
            >
              Total Items Price :
            </Text>
            <Text
              style={{
                color: "#edb820",
                fontFamily: "PoppinsRegular",
                fontSize: 16,
              }}
            >
              {" "}
              533 $
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#FFF",
            backgroundColor: "#EDB820",
            paddingVertical: 12,
            width: "70%",
            borderRadius: 25,
            textAlign: "center",
            fontFamily: "PoppinsBold",
            fontSize: 16,
          }}
        >
          CheckOut
        </Text>
      </View>
    </Container>
  );
};

export default CartItems;
