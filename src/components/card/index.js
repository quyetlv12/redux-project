import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  const handleClick = (id) => {
    props.getId(id);
  };
  const remove = (id) => {
    props.delete(id)
  };
  return (
    <ul className="p-20">
      {props.list.map((item) => (
        <>
          <li
            className={props.list.id != item.id ? "text-red-500" : "text-black"}
            key={item._id}
            onClick={() => handleClick(item._id)}
          >
            {item.name}
          </li>
          <button className="bg-red-500 text-white rounded-lg p-5" onClick={() => remove(item._id)}>Xoá sản phẩm</button>
        </>
      ))}
    </ul>
  );
};

export default Card;
