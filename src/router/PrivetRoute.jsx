import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivetRoute = ({ children }) => {

    const { userInfo, loding } = useContext(AuthContext);
    console.log(children, userInfo)
    if (loding) {
        return (
            <div className="text-center my-48">
                <h2>Please Login </h2>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }
    if (userInfo) {
        return children
    }



    return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;