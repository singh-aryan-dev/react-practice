import React, { useState, useEffect } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Updating Items");
  }, [getItems]);

  return items.map((items) => <div key={items}>{items}</div>);
}
export default List;
