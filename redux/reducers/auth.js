import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isAuthinticated: false,
  data: {},
  stepsInfo: {},
};
const userSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    setUserInfo: (state, action) => {
      state.isAuthinticated = true;
      state.data = action.payload;
    },
    stepsInfo: (state, action) => {
      state.stepsInfo = action.payload;
    },
    deleteUserInfo: (state) => {
      state.value = initialValue;
    },
  },
});

const { setUserInfo, stepsInfo } = userSlice.actions;

export default userSlice.reducer;

export { userSlice, setUserInfo, stepsInfo };
