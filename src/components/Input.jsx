import React from "react";

const Input = ({ label, width, placeholder, type,onChange,value,margin }) => {
  return (
    <>
      <label className={`form-control w-full ${margin}`}>
        <div className="label">
          <span className="label-text text-lg font-semibold">{label}</span>
        </div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`border-b-2 border-gray-300 outline-none py-2 ${width} flex flex-row justify-center items-center`}
        />
      </label>
    </>
  );
};
export default Input;
