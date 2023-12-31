import LoginPage from "@/pages/login";
import { useAuth } from "@/helpers/utils/AuthContext";

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if(loading) {
        return null;
    }

    if(!user){
        return <LoginPage />
    }

    return children;
}