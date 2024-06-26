interface User {
    userId: string;
    token: string;
    userTypeInfo: string; // Adjust this type as per your actual data structure
}

interface AuthState {
    userId: string | null;
    isLoggedIn: boolean;
    token: string | null;
    userTypeInfo: string | number | null;
}
