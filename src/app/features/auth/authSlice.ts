import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { useAppSelector } from '../../../hooks/useAppSelector';


const initialAuthState: AuthState = {
    userId: localStorage.getItem('userId') || null,
    isLoggedIn: !!localStorage.getItem('userId'),
    token: localStorage.getItem('token'),
    userTypeInfo: localStorage.getItem('userTypeInfo'),
};


const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        // Login action
        login: (state, action: PayloadAction<LoginRes>) => {
            const { userId, token, userTypeInfo } = action.payload;
            
            if (token) {

                // Update localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
                localStorage.setItem('userTypeInfo', userTypeInfo.toString());

                // Update state
                state.userId = userId;
                state.isLoggedIn = true;
                state.token = token;
                state.userTypeInfo = userTypeInfo;

            }
            return state;
        },
        // Logout action
        logout: (state) => {
            // Clear localStorage
            localStorage.clear();

            // Reset state
            state.userId = null;
            state.token = null;
            state.isLoggedIn = false;
            state.userTypeInfo = null;

            return state;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

const authSelector = (state: RootState) => state.auth;

export const authSelectors = {
    user: createSelector(authSelector, (auth) => ({
        userId: auth.userId,
        isLoggedIn: auth.isLoggedIn,
        token: auth.token,
        userInfoType: auth.userTypeInfo
    })),
};

export const useAuthSelector = () => useAppSelector(authSelectors.user);