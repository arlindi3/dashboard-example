import React, { useState } from "react";

import "./Todo.css";
function Todo() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const addItems = () => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    if (!newItem) {
      alert("Add an item");
    } else {
      setItems((oldList) => [...oldList, item]);
      setNewItem("");
    }
  };
  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };
  return (
    <>
      <h1 className="todo">Todo</h1>
      <div className="oval-background2"></div>

      <input
        value={newItem}
        className="todo-text"
        type="text"
        placeholder="add todo"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="btn-add" onClick={addItems}>
        ➕
      </button>

      <ul className="unordered">
        {items.map((item) => {
          return (
            <li className="list" key={item.id}>
              {item.value}
              <button
                className="btn-remove"
                onClick={() => deleteItem(item.id)}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
