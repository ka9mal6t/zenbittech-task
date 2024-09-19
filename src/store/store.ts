import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { loadState, saveState } from './localStorage';

const persistedState = loadState() || {};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: persistedState
});

store.subscribe(() => {
    saveState({
      auth: store.getState().auth,
    });
  });
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
