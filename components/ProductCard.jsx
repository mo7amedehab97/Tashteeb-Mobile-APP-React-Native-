import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Context } from "../Context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addItem } from "../assets/config/asyncStoreage";

const ProductCard = ({
  navigation,
  productInfo: { image, name, price },
  productInfo,
}) => {
  const { setData, cartItems, setCartItems } = useContext(Context);

  useEffect(() => {
    const getItems = async () => {
      try {
        const storedItemsString = await AsyncStorage.getItem("cart");
        if (storedItemsString) {
          const storedItems = JSON.parse(storedItemsString);
          setCartItems(storedItems);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, []);

  return (
    <TouchableOpacity
      style={{
        marginBottom: 16,
        marginHorizontal: 4,
      }}
      onPress={() => {
        setData(productInfo);
        navigation.navigate("Details");
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 170,
          height: 150,
          borderRadius: 16,
          position: "relative",
        }}
        resizeMode={"contain"}
      />
      <Ionicons
        name={"cart-outline"}
        size={36}
        color="#edb820"
        style={{
          position: "absolute",
          right: 10,
          top: 8,
        }}
        onPress={() => addItem(productInfo, productInfo?.name)}
      />

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "#777777a4",
          paddingVertical: 4,
          paddingHorizontal: 6,
          borderRadius: 16,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "PoppinsLight",
            fontSize: 16,
            letterSpacing: 1,
          }}
        >
          {price} $
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
