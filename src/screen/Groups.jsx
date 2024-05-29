import React from "react";
import Context from "../components/Context";
import { useContext } from "react";

const Groups = () => {
  const { cart } = useContext(Context);

  console.log(cart);
  return cart.map((item) => {
    <ul className="flex flex-col justify-around items-center mx-auto my-5 w-[80%] list-decimal">
      return (
      <li className="text-sm flex flex-row justify-around items-center">
        {item.name} {item.email} {item.category}
      </li>
      );
    </ul>;
  });
};
export default Groups;
