//  toolkit combines reducer, action, types file all in one

import { createSlice } from "@reduxjs/toolkit";
// import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  // test: [3, 1, 2],
  test: { a: 1 },
};

// NON-SERIALIZABLE VALUES:
// objects that are not plain
// plain objs, strings, numbers,
// no promises, class constructors, symbols, functions

export const userSlice = createSlice({
  // name of the slice and actions and action types
  name: "user",
  initialState: INITIAL_STATE,
  // replaces switch statement
  reducers: {
    // shorthand for setCurrentUser: () => {}
    // same as below how we pass state and action in param
    setCurrentUser(state, action) {
      // accesses state to get currentUser
      // accesses action to get payload
      state.currentUser = action.payload;
    },
  },
});

// export const userReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };

// userSlice is an object we get back from createSlice
// off of that object, we pull off the actions here:

// =============== ACTION =================
// actions is a property off of the userSlice
// actions are the values within the reducers object above
export const { setCurrentUser } = userSlice.actions;

// =============== REDUCER ===============
// our userReducer access the userSlice in this file and the
// .reducer -> we get the reducer function created within the slice
export const userReducer = userSlice.reducer;
