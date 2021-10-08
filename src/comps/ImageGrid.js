import React from "react";
import useFirestore from "../hooks/useFirestore";
const ImageGrid = ({ file }) => {
  console.log("hi");
  const { items } = useFirestore("images", file);
  console.log(items);
  return (
    <div className="img-grid">
      {items &&
        items.map((item) => (
          <div className="img-wrap" key={item.id}>
            <img src={item.downloadURL} alt="uploaded pic" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
