import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="card-body rounded-lg shrink-0 w-full max-w-lg my-10 mx-auto bg-base-200">
            <form >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="flex justify-between">
                <p className="font-bold">New here?</p>
                <Link to="/register">Create an account </Link>
            </div>
        </div>
    );
};

export default Login;