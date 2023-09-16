import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Feautures/UserSlice';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
const reducer = combineReducers({
  user: userSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [], 
};

// Persist the store
const persistedReducer = persistReducer(persistConfig, reducer);

// Create the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
