import React, { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./index.css";

const App = () => {
  const [items, setItems] = useState([]);

  //creating function for adding an item
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  //creating function for delete an item
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  //function for update packed
  const handleDone = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    console.log(id);
    
  };
  return (
    <div className="appWrapper">
      <Header />
      <Main
        items={items}
        handleAddItems={handleAddItems}
        handleDeleteItem={handleDeleteItem}
        handleDone={handleDone}
      />
      <Footer items={items} />
    </div>
  );
};

export default App;
