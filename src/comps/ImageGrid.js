import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ file, setSelectedImg }) => {
  console.log("hi");
  const { items } = useFirestore("images", file);
  console.log(items);
  return (
    <div className="img-grid">
      {items &&
        items.map((item) => (
          <motion.div
            className="img-wrap"
            key={item.id}
            onClick={() => setSelectedImg(item.downloadURL)}
            layout
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              src={item.downloadURL}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
