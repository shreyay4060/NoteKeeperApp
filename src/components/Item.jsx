import React from "react";

export default function Item(props) {
  return (
    <>
      <div className="items-grid">
        {props.newValue?.map((note, index) => (
          <div className="item-card" key={index}>
            <h1>{note.title}</h1>
            <br />
            <p>{note.content}</p>
            <button
              className="delete-btn"
              onClick={() => props.deleteItem(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
