import { configureStore } from '@reduxjs/toolkit';
import authReducer from './app/features/auth/authSlice';
import mainApi from './app/apis/mainApi/mainApislice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        [mainApi.reducerPath]: mainApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
