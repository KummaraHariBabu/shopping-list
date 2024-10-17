import React, { useState } from "react";
import List from "./List"; // Import the List component
import Form from "./Form";

const Main = ({ items, handleAddItems, handleDeleteItem, handleDone }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div>
      <Form handleAddItems={handleAddItems} />
      <select
        className="select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="input">Sort by Input</option>
        <option value="packed">Sort by Packed</option>
      </select>
      <ul className="mainWrapper">
        {sortedItems.map((item) => (
          <List
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onDone={handleDone}
          />
        ))}
      </ul>

    </div>
  );
};

export default Main;
