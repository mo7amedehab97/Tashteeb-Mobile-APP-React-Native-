import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const CartProductItem = ({ productInfo }) => {
  return (
    <View
      style={{
        paddingVertical: 8,
        flexDirection: "row",
      }}
    >
      <View>
        <Image
          source={{ uri: productInfo?.image }}
          resizeMode="contain"
          style={{
            width: 150,
            height: 100,
            borderRadius: 5,
          }}
        />
      </View>
      <View
        style={{
          paddingLeft: 16,
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "80%",
            }}
          >
            <Text
              style={{
                color: "#ddd",
                fontFamily: "PoppinsLight",
              }}
            >
              {productInfo.name}
            </Text>
          </View>
          <TouchableOpacity style={{}}>
            <AntDesign name={"close"} light size={16} color="#d52020" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                color: "#ddd",
                fontFamily: "PoppinsLight",
              }}
            >
              {productInfo.price} $
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 4,
              paddingHorizontal: 8,
            }}
          >
            <AntDesign
              name={"minus"}
              size={18}
              color="#edb820"
              style={{
                backgroundColor: "#dddddd49",
              }}
            />
            <Text
              style={{
                color: "#fff",
                marginHorizontal: 8,
                fontFamily: "PoppinsRegular",
              }}
            >
              2
            </Text>
            <AntDesign
              name={"plus"}
              size={18}
              color="#edb820"
              style={{
                backgroundColor: "#dddddd49",
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartProductItem;
