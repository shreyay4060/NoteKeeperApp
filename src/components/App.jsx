import React, { useState } from "react";
import Item from "./Item";
import Form from "./Form";

function App() {
  const [item, setItem] = useState({
    title: "",
    content: "",
  });

  const [newValue, setNewValue] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setItem((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setNewValue((prev) => [...prev, { ...item }]);
    setItem({
      title: "",
      content: "",
    });
  }

  function deleteItem(id) {
    setNewValue((prev) => prev.filter((_, index) => index !== id));
  }

  return (
    <>
      <Form handleChange={handleChange} handleClick={handleClick} item={item} />

      <br />
      <br />
      <br />
      <div className="items-container">
        <Item newValue={newValue} deleteItem={deleteItem} />
      </div>

      <br />
      <br />
    </>
  );
}

export default App;
