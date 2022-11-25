import * as ImagePicker from "expo-image-picker";
import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";
import { stepsInfo } from "../redux/reducers/auth";
import axios from "axios";
import styled from "styled-components/native";
const ImageContainer = styled.View`
  width: 100%;
  padding: 5px 32px;
  flex-direction: row;
  align-items: center;
`;

const ImageHolder = styled.TouchableOpacity`
  border-width: 1.5px;
  width: 75px;
  height: 75px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const AddImage = () => {
  const [hasPermission, setHasPermissoins] = useState(null);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const her = useSelector((state) => state);
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermissoins(galleryStatus.status === "granted");
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result, "result");
    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }
  };
  const fet = () => {
    dispatch(
      stepsInfo({
        ...data,
      })
    );
  };
  return (
    <ImageContainer>
      <ImageHolder
        style={{
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderColor: "#ddd",
        }}
        onPress={() => pickImage()}
      >
        <FontAwesome5 name={"link"} solid size={32} color="#ddd" />
      </ImageHolder>
      <View>
        <Text
          style={{
            color: "#ddd",
            fontFamily: "PoppinsRegular",
            marginLeft: 15,
            fontSize: 16,
          }}
        >
          Upload a profile picture
        </Text>
        <Text
          style={{
            color: "#ddd",
            fontFamily: "PoppinsRegular",
            marginLeft: 15,
            fontSize: 16,
          }}
        >
          (optional)
        </Text>
      </View>
    </ImageContainer>
  );
};

export default AddImage;
