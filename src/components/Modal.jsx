import React from "react";
import TableStudent from "./TableStudent";
import AddStudent from "../screen/AddStudent";
import Input from "./Input";
import Context from "./Context";
import { useContext } from "react";
import CheckBox from "./CheckBox";
import EditModal from "./EditModal";

const Modal = () => {
const {search,setsearch}=useContext(Context)
  return (
    <>
    <div className="flex flex-row justify-center items-center ">
      <Input
        type={"search"}
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
        width={"w-[50%]"}
        margin={"ml-10 my-14"}
        placeholder={"Type here..."}
        label={"what you looking for ?"}
      />
      <CheckBox/>
      </div>
      <TableStudent />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Register</h3>
          <AddStudent />
        </div>
      </dialog>
      <EditModal/>

    </>
  );
};
export default Modal;
