import { todoReducer } from './todo/slice';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
// import { combineReducers } from 'redux';
import { productsReducer } from './products/slice';
import { userReducer } from './users/slice';
import { appReducer } from './appStore/slice';
import { authReducer } from './auth/slice';

const persistConfig = {
  key: 'auth',
  storage,
  // blackList: ['password'],
  whitelist: ['token'],
};

// const persistConfig2 = {
//   key: 'other',
//   storage,
// };

const authPersistedReducer = persistReducer(persistConfig, authReducer);

// const otherReducers = combineReducers({
//   users: todoReducer,
//   items: todoReducer,
//   password: todoReducer,
// });

// const persistedReducer2 = persistReducer(persistConfig2, otherReducers);

export const reducer = {
  todo: authReducer,
  // other: persistedReducer2,
  products: productsReducer,
  users: userReducer,
  appState: appReducer,
  auth: authPersistedReducer,
};
