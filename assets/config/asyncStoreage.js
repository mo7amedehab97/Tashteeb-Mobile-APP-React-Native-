import AsyncStorage from "@react-native-async-storage/async-storage";

export const getData = async (str) => {
  try {
    const jsonValue = await AsyncStorage.getItem(str);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export const storeObj = async (value, str) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(str, jsonValue);
  } catch (e) {
    console.log(e);
  }
};
