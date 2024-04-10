import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const {loginUser, googleLogin, githubLogin } = useContext(AuthContext);
    const location = useLocation(); 
    console.log(location)
    const navigate= useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { email, password } = data;
        loginUser(email, password)
            .then(result => {
                console.log(result)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error=>{
                console.log(error)
            })
    }

    return (
        <div className="card-body rounded-xl shrink-0 w-full max-w-sm my-10 mx-auto bg-base-200">
            <Helmet><title>Dream House | Login</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="relative label">
                        <span className="label-text">Password</span>
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute text-2xl top-12 right-3">
                            {
                                showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </span>
                    </label>
                    <input type={showPassword?"text":"password"} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                    {errors.password && <span className="text-red-500">This field is required</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="flex mt-1 justify-between">
                <p className="font-bold">New here?</p>
                <Link to="/register">Create an account </Link>
            </div>
            <div className="text-center mt-7 mb-2">
                <p>======continue with=======</p>
            </div>
            <div className="flex justify-between">
                <button className="btn btn-outline" onClick={()=>googleLogin()}>Google</button>
                <button className="btn btn-outline" onClick={()=>githubLogin()}>Github</button>
            </div>
        </div>
    );
};

export default Login;