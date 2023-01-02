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


export const addItem = async (obj, name) => {
  try {
    const storedItemsString = await AsyncStorage.getItem("cart");
    let storedItems = [];
    if (storedItemsString) {
      storedItems = JSON.parse(storedItemsString);
    }
    const existingItem = storedItems.find((item) => item.name === name);
    if (existingItem) {
      alert("Item already exists");
      return;
    }
    const newItem = obj;
    storedItems.push(newItem);
    await AsyncStorage.setItem("cart", JSON.stringify(storedItems));
  } catch (error) {
    console.log(error);
  }
};
