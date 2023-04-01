import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import CarContext from '../context/CarContext'


const Navbar = () => {
  const context = useContext(CarContext);
  const [loged, setloged] = useState(false)
  const { user  } = context;
  useEffect(() => {
  if(user !== null) setloged(true);
  else setloged(false);
  }, [user]);

  return (
    <nav className="flex justify-between px-20 py-5 items-center bg-slate-300">
      <h1 className="text-xl text-gray-800 font-bold">Car Market</h1>
      <div className="flex items-center bg-white w-2/5 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 pt-0.5 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="ml-2 outline-none bg-transparent font-"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-gray-700">
            <Link to="/">Marketplace</Link>
          </li>
          <li className="font-semibold text-gray-700">
            <Link to="/dealer">Dealer</Link>
          </li>
              <li className="font-semibold text-gray-700">
                <Link to="/login">{loged ? `${user?.name}` : 'Login'}</Link>
              </li>
              <li className="font-semibold text-gray-700">
                <Link to="/signup">Signup</Link>
              </li>
              
            <li className="font-semibold text-gray-700">
            <Link to="/profile">Profile</Link>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
