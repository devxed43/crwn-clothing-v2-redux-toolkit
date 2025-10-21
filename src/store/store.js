// uses createStore and applyMiddleware
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

import logger from "redux-logger";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

// import { compose, createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';

// import { rootReducer } from './root-reducer';

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//   Boolean
// );

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// store only needs rootReducer
// throws non-serializable value error message here by default
// the error is coming from firebase new Google(), etc
// option 1: disable middleware via getMiddleware({})

export const store = configureStore({
  reducer: rootReducer,
  // redux toolkit includes 3 middlewares by default.
  // thunk being one of the default middlewares
  // overrides default middlewares. no middleware resorts to thunk, and the other two

  // this option includes default middleware, turning off serial check and my own custom middlewares
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false, // turns off error message. doesn't check for non-serial values
  //   }).concat(middleWares),

  // option 2: this option keeps the serial check
  // we pass pickedUser in the app
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

// export const persistor = persistStore(store);
