import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {

    const links = (
        <>
            <li><NavLink className={({isActive}) => isActive ? 'border-2 border-green-400 bg-white font-bold' : 'text-green-400 font-bold'} activeClassName="activeNavLink"  to="/">Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'border-2 border-green-400 bg-white font-bold' : 'text-green-400 font-bold'}  to="/listedBooks" >Listed Books</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'border-2 border-green-400 bg-white font-bold' : 'text-green-400 font-bold'} to="/rechart">Pages to Read</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'border-2 border-green-400 bg-white font-bold' : 'text-green-400 font-bold'}to="/review">Review</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'border-2 border-green-400 bg-white font-bold' : 'text-green-400 font-bold'}to="/blog">Blog</NavLink></li>
        </>
    );

    return (
        <div className="navbar relative">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-2xl">StoryScape</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className='p-4 text-white text-[14px] font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 w-28'>
                    Sign In
                </button>
                <button className='p-4 text-white text-[14px] font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 w-28'>
                    Sign Up
                </button>

            </div>
            <img src="/assets/images/bg2.png" alt="" className="absolute top-0 right-0 h-full max-h-full overflow-auto" />
        </div>
    );
};

export default Navbar;