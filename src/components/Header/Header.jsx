
import {  Link, NavLink } from 'react-router-dom';

const Header = () => {



  return (
    <div className=" bg-slate-500 p-3">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link to='/'>
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </Link>
          <div>
            <ul className="flex gap-5 text-sky-300 text-lg font-bold">
              <NavLink
                to="/"
                className={({isActive}) => (isActive ? "text-blue-700" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/login"
                className={({isActive}) => (isActive ? "text-blue-700" : "")}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({isActive}) => (isActive ? "text-blue-700" : "")}
              >
                Register
              </NavLink>
              <NavLink> LogOut</NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;