import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Footer = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#11131d",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        paddingVertical: 18,
      }}
    >
      <Ionicons name={"home-outline"} size={36} color="#edb820" />
      <FontAwesome5 name={"store"} size={26} color="#fff" />
      <Ionicons name={"hammer"} size={26} color="#fff" />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer_item: {
    fontFamily: "PoppinsLight",
    fontSize: 19,
    lineHeight: 21,
    color: "yellow",
  },
});
