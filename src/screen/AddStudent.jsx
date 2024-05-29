import React from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import Context from "../components/Context";
import { useContext } from "react";

const AddStudent = () => {
  const { name, setname, email, setemail, date, setdate, addStudent, select } =
    useContext(Context);

  return (
    <>
      <div className="  w-auto mx-auto mt-10  min-h-max ">
        <Input
          label={"what is your  Name?"}
          width={"w-[90%]"}
          placeholder={"Enter your Name"}
          type={"text"}
          onChange={(e) => setname(e.target.value)}
          value={name}
        />
        <Input
          label={"what is your  Email Address?"}
          width={"w-[90%]"}
          placeholder={"Enter your Email"}
          type={"email"}
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <Input
          label={" What is your date of birth?"}
          width={"w-[90%]"}
          placeholder={"Enter your birthday "}
          type={"date"}
          value={date}
          onChange={(e) => setdate(e.target.value)}
        />
      </div>

      <div className="w-[80%] mt-10 mx-auto">
        <Select />
        <Button textBtn={"Add Student"} onClick={() => addStudent(name, email, date, select)} marginTop={"mt-10"} />
      </div>
    </>
  );
};
export default AddStudent;
