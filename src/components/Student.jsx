import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import Input from "./Input";
import Context from "./Context";
import { useContext } from "react";
import Button from "./Button";

const Student = ({ name, email, course, deletStudent,editingEnable,addToCart}) => {


  return (
    <tbody>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar"></div>
            <div>
              <div className="font-bold text-xs">{name}</div>
            </div>
          </div>
        </td>
        <td className="text-xs">
          {email}
          <br />
        </td>
        <td className="text-xs">{course}</td>
        <th>
          <button className="btn btn-ghost btn-xs">
            <FaRegTrashCan className="text-xs" onClick={deletStudent} />
          </button>
          <button  className="btn btn-ghost btn-xs"  onClick={editingEnable}>
          <FiEdit3 className="text-xs" />
          </button>
          <button className="btn btn-ghost btn-xs"  onClick={addToCart}>
            <GoPlusCircle className="text-xs font-bold" />
          </button>
        </th>
      </tr>
    </tbody>
  );
};
export default Student;
