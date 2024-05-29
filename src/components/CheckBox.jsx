import React, { useState } from "react";
import Context from "./Context";
import { useContext } from "react";

const CheckBox = () => {
  const { list } = useContext(Context);



    const { handleCheckboxChange } = useContext(Context);
    const [filter, setfilter] = useState([]);

    const handleChange = (e) => {
      let isCheck = e.target.checked;

      if (isCheck) {
        const filterItems = list.filter((item) => {
          return item.category.toLowerCase() === e.target.value
        });
        setfilter([...filter,filterItems])
        console.log(filter)

      }
    };

    return (
      <div className="form-control w-[30%] mr-14 my-10">
        <label className="label cursor-pointer">
          <span className="label-text text-base font-semibold">React</span>
          <input
            type="checkbox"
            defaultChecked
            value={"react"}
            className="checkbox"
            onChange={handleChange}
          />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-base font-semibold">
            Java Script
          </span>
          <input
            type="checkbox"
            value={"javascript"}
            className="checkbox"
            onChange={handleChange}
          />
        </label>
        <label className="label cursor-pointer ">
          <span className="label-text text-base font-semibold">Html</span>
          <input
            type="checkbox"
            value={"html"}
            className="checkbox"
            onChange={handleChange}
          />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-base font-semibold">Css</span>
          <input
            type="checkbox"
            value={"css"}
            className="checkbox"
            onChange={handleChange}
          />
        </label>
      </div>
    );
  };


export default CheckBox;
