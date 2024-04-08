import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Nav = () => {

  const links = <>
    <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500 border-green-500 border p-2 rounded-xl font-bold' : 'font-bold p-2'}>Home</NavLink>
    <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500 border-green-500 border p-2 rounded-xl font-bold' : 'font-bold p-2'}>Home</NavLink>
    <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500 border-green-500 border p-2 rounded-xl font-bold' : 'font-bold p-2'}>Home</NavLink>
  </>

  
  const {logout, userInfo}= useContext(AuthContext)
  return (
    <div className="navbar sticky top-0 z-10 my-3 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow space-y-2 bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost font-black text-green-500 text-2xl md:text-2xl">Dream House</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-3 menu-horizontal px-1">

          {links}
        </ul>
      </div>
      <div className="navbar-end">
      <Link to="/register" className="btn text-white bg-green-500 mr-3 hover:text-green-500">Register</Link>
        {
          userInfo?<div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="profile img" src={userInfo?.photoURL} />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><button className="btn btn-ghost">{userInfo.displayName}</button></li>
            <li><button onClick={()=>logout()} className="btn btn-ghost">Logout</button></li>
          </ul>
        </div>
        :
        <Link to="/login" className="btn text-white hover:text-blue-500 bg-blue-500">Login</Link>
        }
        
        
      </div>
    </div>
  );
};

export default Nav;