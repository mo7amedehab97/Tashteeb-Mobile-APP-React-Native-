import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const EngineerCard = ({ navigation, engInfo: { image, username } }) => {
  return (
    <TouchableOpacity
      style={{
        marginRight: 16,
      }}
      onPress={() => navigation.navigate("Details")}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 250,
          height: 150,
          borderRadius: 16,
          position: "relative",
        }}
        resizeMode={"contain"}
      />
      <Feather
        name={"message-circle"}
        size={26}
        color="#ddd"
        style={{
          position: "absolute",
          right: 24,
          top: 16,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "#777777a4",
          paddingVertical: 8,
          paddingHorizontal: 8,
          borderRadius: 16,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "PoppinsSemiBold",
            fontSize: 16,
            letterSpacing: 1,
          }}
        >
          {username}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EngineerCard;
