import { View, Text, FlatList, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Title from "../components/Title";
import Footer from "../components/Footer";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import EngineerCard from "../components/EngineerCard";
import { fakeProducts, fakeUsers } from "../assets/config/fakeData";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#1D202F",
      }}
    >
      <View
        style={{
          marginTop: "15%",
          paddingHorizontal: 16,
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontFamily: "PoppinsLight",
            fontSize: 24,
            color: "#fff",
            paddingRight: 4,
          }}
        >
          Hello,
        </Text>
        <Text
          style={{
            fontFamily: "PoppinsLight",
            fontSize: 24,
            color: "#edb820",
          }}
        >
          Mohamed
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          height: "10%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder="SEARCH"
          placeholderTextColor={"#fff"}
          style={{
            borderWidth: 1,
            borderColor: "#fff",
            fontFamily: "PoppinsLight",
            fontSize: 14,
            letterSpacing: 1,
            position: "relative",
            borderRadius: 18,
            paddingVertical: 4,
            paddingHorizontal: 16,
            color: "#fff",
            width: "100%",
          }}
        />
        <FontAwesome5
          name={"search"}
          light
          size={16}
          color="#ddd"
          style={{
            position: "absolute",
            right: 34,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontFamily: "PoppinsRegular",
            fontSize: 20,
            color: "#FFF",
            paddingRight: 4,
          }}
        >
          Best Engineers
        </Text>
      </View>
      <View
        style={{
          width: "100%",

          padding: 16,
          alignItems: "center",
        }}
      >
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={fakeUsers.filter((item) => item.role === "engineer")}
          renderItem={({ item, index }) => <EngineerCard engInfo={item} />}
        />
      </View>
      <View
        style={{
          marginTop: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 16,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontFamily: "PoppinsRegular",
            fontSize: 20,
          }}
        >
          Most Popular Tools
        </Text>
        <Text
          style={{
            fontFamily: "PoppinsRegular",
            fontSize: 16,
            color: "#edb820",
          }}
        >
          See All
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          padding: 16,
          alignItems: "center",
        }}
      >
        <FlatList
          numColumns={2}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={fakeProducts}
          renderItem={({ item, index }) => <ProductCard productInfo={item} />}
        />
      </View>
      <Footer />
    </View>
  );
};

export default HomeScreen;
