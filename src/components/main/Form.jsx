import React, { useState } from "react";

const Form = ({ handleAddItems }) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (product) {
      const addTodo = {
        id: Date.now(),
        packed: false,
        product,
        quantity,
      };
      console.log(addTodo);
      handleAddItems(addTodo);
      setProduct("");
      setQuantity(1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="select"
      >
        {[...Array(20)].map((_, index) => (
          <option value={index + 1} key={index}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter Data"
        className="inputData"
        value={product}
        onChange={(e) => {
          setProduct(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button className="btns addBtn">Add</button>
    </form>
  );
};

export default Form;
