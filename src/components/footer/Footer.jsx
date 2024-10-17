import React from "react";

const Footer = ({ items }) => {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = (packedItems / numItems) * 100;
  console.log(packedItems);
  return (
    <div className="footerWrapper">
      {percentage === 100
        ? <h4 className="soppingDone">Shopping has Done</h4>
        : `Total Items: ${numItems} Completed Items : ${packedItems} -- ${percentage}%
        `}
    </div>
  );
};

export default Footer;
