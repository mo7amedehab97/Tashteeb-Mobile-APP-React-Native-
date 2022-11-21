import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isAuthinticated: false,
  data: {},
};
const userSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    setUserInfo: (state, action) => {
      state.isAuthinticated = true;
      state.data = action.payload;
    },
    deleteUserInfo: (state) => {
      state.value = initialValue;
    },
  },
});

const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;

export { userSlice, setUserInfo };
