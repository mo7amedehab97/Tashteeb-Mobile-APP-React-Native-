import { View, Text, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProductCard = ({ productInfo: { image, name, price } }) => {
  //   console.log(productInfo);
  return (
    <View
      style={{
        marginBottom: 16,
        marginHorizontal: 4,
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
    </View>
  );
};

export default ProductCard;
