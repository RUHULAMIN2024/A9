import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UpdateProfile = () => {

    const {userInfo, userUpdate, setReload } = useContext(AuthContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        userUpdate(name, photo)
        setReload(true)
        toast.success("profile updated succesfuly!")
    }

    return (
        <div>
            <div className="card-body rounded-xl shrink-0 w-full max-w-sm my-10 mx-auto bg-base-200">
            <Helmet><title>Dream House | Update Profile</title></Helmet>
            <h2 className="text-3xl text-center">Update your Profile</h2>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" required placeholder={userInfo?.displayName || "Add Your Name"} name="name" className="input input-bordered"/>
                    
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder={userInfo?.email || "Email Not Available"} disabled name="email" className="input input-bordered" />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" required placeholder={userInfo?.photoURL || "Add Your PhotoURL"} name="photo" className="input input-bordered" />
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