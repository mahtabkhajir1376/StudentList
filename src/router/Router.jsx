import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../screen/Navbar";
import Groups from "../screen/Groups";
import Context from "../components/Context";
import Modal from "../components/Modal";

const Root = () => {
  const [name, setname] = useState("");
  const [select, setselect] = useState("React");
  const [date, setdate] = useState("");
  const [email, setemail] = useState("");
  const [search, setsearch] = useState("");
  const [edit, setedit] = useState("");
  const [emailEdit, setemailEdit] = useState("");
  const [cart, setcart] = useState([]);
  const[filterTag , setFilterTag]=useState([])
  const [list, setlist] = useState([
    {
      id: 1,
      name: "mahtab",
      email: "mahtab@gmail.com",
      date: "01/01/1997",
      category: "React",
    },
    {
      id: 2,
      name: "Amir",
      email: "Amir@gmail.com",
      date: "02/05/1999",
      category: "Java Script",
    },
    {
      id: 3,
      name: "Reyhane",
      email: "reyhane@gmail.com",
      date: "04/04/1999",
      category: "Css",
    },
  ]);

  const addStudent = (name, email, date, category) => {
    const newStudent = {
      id: list.length + 1,
      name,
      email,
      date,
      category,
      isEditing: false,
    };
    setlist([...list, newStudent]);
    setname("");
    setemail("");
    setselect("React");
    setdate("");
  };

  const deletStudent = (id) => {
    const updated = list.filter((item) => {
      return item.id !== id;
    });
    setlist(updated);
  };

  // const SearchStudent = (student) => {
  //   const updated = list.filter((item) => {
  //     return item.category.toLowerCase() === student.toLowerCase()
  //       ? item
  //       : null;
  //   });
  //   setlist(updated);
  //   setsearch("");
  // };

  const editingEnable = (id) => {
    const editItem = list.map((item) => {
      return item.id === id ? { ...item, isEditing: true } : item;
    });
    setlist(editItem);
  };

  const editStudent = (newName, newEmail, id) => {
    const update = list.map((item) => {
      return item.id === id
        ? { ...item, name: newName, email: newEmail, isEditing: false }
        : item;
    });
    console.log(update);
    setlist(update);
  };

  const addToCart = (id) => {
    list.filter((item) => {
      return item.id === id ? setcart([...cart, item]) : null;
    });
  };
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <div className="w-[40%] shadow-2xl rounded-lg h-[750px] max-h-min">
      <BrowserRouter>
        <Context.Provider
          value={{
            name,
            setname,
            date,
            setdate,
            email,
            setemail,
            addStudent,
            select,
            setselect,
            list,
            search,
            setsearch,
            setlist,
            deletStudent,
            editingEnable,
            editStudent,
            edit,
            setedit,
            emailEdit,
            setemailEdit,
            search,
            addToCart,
            cart,
            filterTag,
setFilterTag
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Modal />} />
            <Route path="group" element={<Groups />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
};

export default Root;
