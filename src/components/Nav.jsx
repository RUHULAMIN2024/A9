import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Nav = () => {

  const links = <>
    <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500 border-green-500 border p-2 rounded-xl font-bold' : 'font-bold p-2'}>Home</NavLink>
    <NavLink to="/update-profile" className={({ isActive }) => isActive ? 'text-green-500 border-green-500 border p-2 rounded-xl font-bold' : 'font-bold p-2'}>Update Profile</NavLink>
    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-green-500 border-green-500 border p-2 rounded-xl font-bold' : 'font-bold p-2'}>Contact Us</NavLink>
  </>


  const { logout, userInfo } = useContext(AuthContext)
  return (
    <div className="navbar animate__fadeInDown animate__animated sticky top-0 z-10 my-3 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow space-y-2 bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost font-black text-green-500 text-2xl md:text-2xl">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900">
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          Dream House</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-3 menu-horizontal px-1">

          {links}
        </ul>
      </div>
      <div className="navbar-end">

        {
          userInfo ? <><button onClick={() => logout()} className="btn mr-3 bg-green-500 btn-ghost">Logout</button>
              <div className="w-10 h-10 rounded-full tooltip tooltip-left" data-tip={userInfo.displayName}>
                <button><img className="rounded-full w-10 h-10" alt="profile" src={userInfo?.photoURL} /></button>
              </div>
          </>
            :
            <Link to="/login" className="btn text-white hover:text-blue-500 bg-blue-500">Login</Link>
        }


      </div>
    </div>
  );
};

export default Nav;