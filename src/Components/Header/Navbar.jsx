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
            <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                   {navLinks}
                </ul>
                </div>
                  <div className="flex ml-2">
                    <img className="w-24 h-12 rounded-md mr-2" src="https://i.ibb.co/jySd3yj/logocar.jpg" alt="logo" />
                    
                  </div>
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
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-20">
                        <span>{user.displayName} <img className="rounded-full w-8" src={user.photoURL}/></span>
                                </ul>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <span className="mr-1 mt-2">{user.displayName}</span> <span> <img className="rounded-full w-14 mb-5 px-2" src={user.photoURL}/></span>
                        </ul>
                    </div>
                    
                    </div>
                    
                    <a onClick={logOut} className="btn btn-sm text-sm lg:text-2xl font-bold">Log out</a>
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