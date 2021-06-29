import React from "react";
import Button from "../../../button";
import Card from "../../../card";

const HomePage = (props) => {
  console.log(props.product.length);
  const showProduct = props.product.map(({ _id, name, image, price }) => {
    return <Card name={name} image={image} price={price} id={_id}/>;
  });
  const showTitle = () => {
    alert("show");
  };
  return (
    <section className="container w-full mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">{showProduct}</div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
