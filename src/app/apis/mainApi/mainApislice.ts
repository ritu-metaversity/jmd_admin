import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { logout } from "../../features/auth/authSlice";
import snackbarUtil from "../../../utils/snackbar";

interface ErrorRes {
    type: string;
    responseCode: number;
    status: string;
    message: string;
}

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("token");
        if (token) headers.set("Authorization", `Bearer ${token}`);
        return headers;
    },
});

const wrapperQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    console.log(result, 'result');
    const errorStatus = result?.error?.status;

    if (result?.error?.status === 401) api.dispatch(logout());
    if (result?.error?.status === 403) api.dispatch(logout());
    if ((result.data as ErrorRes)?.responseCode === 401) api.dispatch(logout());
    if ((result.data as ErrorRes)?.responseCode === 403) api.dispatch(logout());
    return result;
};

const mainApi = createApi({
    reducerPath: "mainApi",
    baseQuery: wrapperQuery,
    endpoints: (builder) => {
        return {
            login: builder.mutation<LoginRes, any>({
                query: (args) => {
                    return {
                        url: "/login/cleint-login",
                        method: "POST",
                        body: args,
                    };
                },
            }),
            changepassword: builder.mutation<changePassword, any>({
                query: (args) => {
                    return {
                        url: "/user/changepassword-self",
                        method: "POST",
                        body: args,
                    };
                },
                transformResponse: (raw: changePassword) => {
                    if (raw.status === true) {
                        snackbarUtil.success(raw.message);
                        localStorage.clear();
                    } else {
                        snackbarUtil.error(raw.message);
                    }
                    return raw;
                },
            }),
            getuserlist: builder.mutation<userListResponse, userListPayload>({
                query: (args) => {
                    return {
                        url: "/user/list-user",
                        method: "POST",
                        body: args,
                    };
                },
            }),
            createUser: builder.mutation<createUserRes, createUserPayload>({
                query: (args) => {
                    return {
                        url: "/user/create",
                        method: "POST",
                        body: args,
                    };
                },
            }),
            usernameIdSearch: builder.mutation<usernameIdSearchRes, usernameIdSearchPaylod>({
                query: (args) => {
                    return {
                        url: '/user/username-id-search',
                        method: 'POST',
                        body: args
                    }
                }
            }),
            userCreationDetail: builder.mutation<userCreationDetailResponse, userCreationDetailPayload>({
                query: (args) => {
                    return {
                        url: '/user/get-detail-for-user-creation',
                        method: 'POST',
                        body: args
                    }
                }
            }),
            activeDeactiveUser: builder.mutation<userActiveDeactiveResponse, userActiveDeactivePayload>({
                query: (args) => {
                    return {
                        url: '/user/activate-deactivate-user',
                        method: 'POST',
                        body: args
                    }
                }
            })
        };
    },
});

export const {
    useLoginMutation,
    useChangepasswordMutation,
    useGetuserlistMutation,
    useCreateUserMutation,
    useUsernameIdSearchMutation,
    useUserCreationDetailMutation,
    useActiveDeactiveUserMutation
} = mainApi;
export default mainApi;
