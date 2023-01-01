import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Context } from "../Context/Context";

const ProductCard = ({
  navigation,
  productInfo: { image, name, price },
  productInfo,
}) => {
  const { setData } = useContext(Context);
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
