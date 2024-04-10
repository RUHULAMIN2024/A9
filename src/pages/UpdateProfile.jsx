import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UpdateProfile = () => {

    const {user, userUpdate } = useContext(AuthContext);
    console.log(user)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        userUpdate(name, photo)
    }

    return (
        <div>
            <div className="card-body rounded-xl shrink-0 w-full max-w-sm my-10 mx-auto bg-base-200">
            <Helmet><title>Dream House | Update User</title></Helmet>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder={user?.displayName || "name not available"} name="name" className="input input-bordered"/>
                    
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input disabled type="email" placeholder={user?.email || "email not available"} name="email" className="input input-bordered" />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" placeholder={user?.photoURL || "photoURL not available"} name="photo" className="input input-bordered" />
                </div>
                
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Profile</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateProfile;