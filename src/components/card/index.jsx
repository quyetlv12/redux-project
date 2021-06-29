import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to={`products/${props.id}`} className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="w-full h-full block"
            src={props.image}
          />
        </Link>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {props.name}
          </h2>
          <p className="mt-1">{props.price}</p>
        </div>
      </div>
  
  );
};

export default Card;
