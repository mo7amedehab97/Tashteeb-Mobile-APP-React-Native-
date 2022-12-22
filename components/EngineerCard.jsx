import { View, Text, Image } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const EngineerCard = ({ engInfo: { image, username } }) => {
  return (
    <View
      style={{
        marginRight: 16,
      }}
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
      <FontAwesome5
        name={"heart"}
        size={36}
        color="#edb820"
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
    </View>
  );
};

export default EngineerCard;
