import { useContext } from "react";
import { AuthContext } from "../../layOut/Pages/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
           <li className="text-xl font-semibold"><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : "" }>Home</NavLink></li>
           <li className="text-xl font-semibold"><NavLink to="/addProduct" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : "" }>Add Product</NavLink></li>
           <li className="text-xl font-semibold"><NavLink to="/myCart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : "" }>My Cart</NavLink></li>
    </>

    return (
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                   {navLinks}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navLinks}
              </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                          <div>
                            <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] bg-base-100 rounded-box w-20">
                                <span>{user.displayName}</span><span><img className="rounded-full w-8" src={user.photoURL} /></span>
                               </ul>
                            </div>
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                <span className="mr-2 mt-5">{user.displayName}</span> <span> <img className="rounded-full w-14 mb-5 px-2" src={user.photoURL}/></span>
                                </ul>
                            </div>
                            </div>
                         <a onClick={logOut} className="btn btn-sm text-sm lg:text-2xl font-bold">LogOut</a>
                    </>
                    :
                    <Link to="/login">
                        <button className="btn btn-sm btn-ghost text-sm lg:text-2xl font-bold">Login</button>
                    </Link>
                }
                 
        </div>
    </div>
       
    );
};

export default Navbar;