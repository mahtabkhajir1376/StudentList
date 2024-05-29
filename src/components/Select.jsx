import React from "react";
import Context from "./Context";
import { useContext } from "react";
const Select = () => {
  const{select,setselect}=useContext(Context)
  return (
    <select className="select select-bordered w-full text-lg font-semibold "  onChange={(e)=>setselect(e.target.value)}>
      <option disabled value={select} className="text-base font-semibold" >
        What course you want?
      </option>
      <option className="text-lg">React</option>
      <option  className="text-lg">Java Script</option>
      <option  className="text-lg">Html</option>
      <option  className="text-lg">Css</option>
    </select>
  );
};
export default Select;