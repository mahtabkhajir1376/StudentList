import React from "react";
import Student from "./Student";
import { useContext } from "react";
import Context from "./Context";
import Input from "./Input";
import { FiEdit3 } from "react-icons/fi";

const TableStudent = () => {
  const {
    list,
    deletStudent,
    editingEnable,
    emailEdit,
    setemailEdit,
    editStudent,
    edit,
    setedit,
    search,
    addToCart,
  } = useContext(Context);

  return (
    <div className="overflow-x-auto mt-14">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th></th>
          </tr>
        </thead>
        {list
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.category.toLowerCase().includes(search);
          })
          .map((item) => {
            return item.isEditing ? (
              <>
                <div className="flex flex-row justify-around ml-10 items-center w-full">
                  <Input
                    value={edit}
                    onChange={(e) => setedit(e.target.value)}
                    width={"w-[80%]"}
                    placeholder={"type name"}
                  />
                  <Input
                    value={emailEdit}
                    onChange={(e) => setemailEdit(e.target.value)}
                    width={"w-[80%]"}
                    placeholder={"type Email"}
                  />
                  <FiEdit3
                    onClick={() => editStudent(edit, emailEdit, item.id)}
                    className="ml-2 mt-10 text-lg cursor-pointer"
                  />
                </div>
              </>
            ) : (
              <Student
                key={item.id}
                name={item.name}
                email={item.email}
                course={item.category}
                deletStudent={() => deletStudent(item.id)}
                editingEnable={() => editingEnable(item.id)}
                addToCart={() => addToCart(item.id)}
              />
            );
          })}
      </table>
    </div>
  );
};
export default TableStudent;
