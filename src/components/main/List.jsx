import React from "react";

const List = ({ item, onDeleteItem, onDone }) => {
  //   const [isAvail, setIsAvail] = useState(item);
  const { packed, product, quantity, id } = item;
  //for making done the item

  //for delete item
//   const handleDelete = () => {
//     onDeleteItem(id);
//   };
  return (
    <li className="listWrapper">
      <span>{quantity}</span>
      <p style={packed ? { textDecoration: "line-through" } : {}}>{product}</p>
      <div>
        <button className="btns doneBtn" onClick={() => onDone(id)}>
          {packed ? "Undo" : "Done"}
        </button>
        <button className="btns deleteBtn" onClick={() => onDeleteItem(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default List;
