// import { createStore } from "redux";

// const initialState = {
//   user: null,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_USER":
//       return { ...state, user: action.payload };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../userSlice"

// export default configureStore({
//     reducer:{
//         case : userReducer
//     }
// })

import { createStore } from "redux";

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
