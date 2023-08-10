import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../featured/auth";
import { useRef } from "react";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const loginData = useSelector((state) => state.auth.value);
  const navigate = useNavigate();

  const menuref = useRef()
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuref.current && !menuref.current.contains(event.target)) {
        setMenu(() => false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuref]);

  return (
    <main className="navbar flex justify-between items-center p-[1.2rem] border-b-4 border-gray-200 mb-[2rem]">
      <section className="logoDiv">
        <Link to="/">
          <h1 className="logo text-[25px] text-blueColor">
            <strong>Job</strong>Search
          </h1>
        </Link>
      </section>

      <section className="menu flex gap-8">
        <li onClick={() => navigate("/")} className="menuList text-[#6f6f6f] hover:text-blueColor ">
          Job
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Blog</li>
        {isAuth ? (
          <div className="relative" ref={menuref}>
            <div>
              <FaUserCircle className="text-[1.7rem] cursor-pointe" onClick={() => setMenu((prev) => !prev)} />
            </div>
            <div className={menu ? "select-none h-[14rem] w-[14rem] right-[-1.4rem] border-solid border-2 border-gray-400 top-[3.5rem] rounded-lg absolute bg-white" : "hidden"}>
              <div className="p-[1rem]">
                <p className="uppercase">
                  <b>{loginData?.name}</b>
                </p>
                <p>{loginData?.email}</p>
              </div>
              <div className="border-solid border-t-2 p-[1rem] border-gray-200">
                <p className="text-[1rem]">Profile</p>
                <p className="text-[.9rem]">My Application</p>
                <p className="text-[.9rem]">Help Center</p>
              </div>
              <div
                onClick={() => {
                  dispatch(logout());
                  setMenu(false);
                }}
                className="absolute cursor-pointer bottom-4 flex h-[1rem] w-[100%] left-[-1px] border-t-[2px] border-blue-600"
              >
                <p className="absolute right-[5rem]">Sign Out</p>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/signin">
            <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Login</li>
          </Link>
        )}
      </section>
    </main>
  );
};

export default Navbar;
