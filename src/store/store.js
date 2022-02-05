import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    })
});

export default store;
