import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { TiPlusOutline } from "react-icons/ti";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 mt-10 ">
        <div className="flex-none"></div>
        <div className="flex-1">
          <a className="btn btn-ghost text-lg font-bold ml-5">Student</a>
          <Button
            textBtn={ <TiPlusOutline className="text-xl" />}
            onClick={() => document.getElementById("my_modal_3").showModal()}
            width={"w-[10%]"}
          />
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost mr-14 text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center mt-5 list-none text-sm font-semibold w-full border-b-4 text-gray-400 ">
        <li className="ml-8 hover:text-gray-900 hover:border-b-4 hover:border-gray-900 py-4">
          <Link to={"/"}>add student</Link>
        </li>
        <li className=" w-20 ml-8 hover:text-gray-900 hover:border-b-4 hover:border-gray-900 py-4 text-gray-400">
          <Link className="flex flex-row justify-around items-center" to={"group"}>Groups<div className="bg-gray-900 text-white px-2 py-1 text-xs rounded-full">1</div></Link>
        </li>
      </div>
    </div>
  );
};
export default Navbar;
