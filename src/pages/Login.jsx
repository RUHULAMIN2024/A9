import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {

    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);

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
            })
            .catch(error=>{
                console.log(error)
            })
    }

    return (
        <div className="card-body rounded-xl shrink-0 w-full max-w-sm my-10 mx-auto bg-base-200">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
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