import React from "react";
import './style.css'
const Card = (props) => {
    const handleClick = (hobbdy) =>{
      console.log(hobbdy.id)
        props.onHobbdyClick(hobbdy)
    }
  return (
    <>
      {props.list.map((item) => (
        <li className={props.activeID == item.id ? "active" : ""} onClick={()=>handleClick(item)}>{item.title}</li>
      ))}
    </>
  );
};

export default Card;
