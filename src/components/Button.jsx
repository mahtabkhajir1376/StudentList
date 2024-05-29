import React from "react";

const Button =({onClick,textBtn,width,marginTop})=>{
    return(
<button className={`btn btn-block  btn-active btn-neutral   text-base ${width} ${marginTop} `}onClick={onClick}>{textBtn}</button>
    )
}
export default Button;