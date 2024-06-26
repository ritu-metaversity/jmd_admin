interface LoginPayload {
    userId: string;
    password: string;
    url: string;
}


interface LoginRes {
    userId: string;
    token: string;
    userTypeInfo: number;
    status: boolean,
    message: string,
    data: null | {}[] | any
}

interface changePassword {
    status: boolean,
    message: string,
    data: null | any
}

interface userListPayload {
    userType: number,
    noOfRecords: number,
    index: number
}

interface userListResponse {
    status: boolean;
    message: null;
    data: userListData[];
}

interface userListData {
    userId: string;
    userName: string;
    mobile: string;
    password: string;
    balance: number;
    matchCommission: number;
    sessionCommission: number;
    share: number;
    userStatus: boolean;
    parentId: string;
}

interface createUserRes {

}

interface createUserPayload {
    username: string;
    reference: string;
    password: string;
    contact: string;
    mobileAppCharge: string | number;
    partnership: number | string;
    casinoPartnership: number | string;
    internationalCasinoPartnership: number | string;
    commissionType: number | string;
    matchCommission: number | string;
    sessionCommission: number | string;
    casinoCommission: number | string;
    parentIdForUserCreation: string
}

interface usernameIdSearchPaylod {
    userType: number
}

interface usernameIdSearchRes {
    status: boolean;
    message: null;
    data: usernameIdSearchData[];
}

interface usernameIdSearchData {
    userId: string;
    userName: string;
}

interface userCreationDetailPayload {
    userId: string
}

interface userCreationDetailResponse {
    status: boolean;
    message: null;
    data: userCreationDetailData;
}

interface userCreationDetailData {
    mobileAppCharge: number;
    commissionType: string;
    myPartnership: number;
    myCasinoPartnership: number;
    myIntlCasinoPartnership: number;
    myMatchCommission: number;
    mySessionCommision: number;
    myCasinoCommission: number;
}

interface userActiveDeactivePayload {
    userId: string,
    activate: boolean
}

interface userActiveDeactiveResponse {
    status: boolean,
    message: string,
    data: null | []
}