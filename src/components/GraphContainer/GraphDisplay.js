import React, { useEffect, useState } from "react";

const GraphDisplay = ({ getGraphItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getGraphItems);
    console.log("calling GraphDisplay component...");
  }, [getGraphItems]);

  return items ? (
    items.map((item, index) => <div key={index}>{item}</div>)
  ) : (
    <></>
  );
};

export default GraphDisplay;
