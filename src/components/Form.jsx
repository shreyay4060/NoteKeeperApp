import React from "react";

export default function Form(props) {
  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          onChange={props.handleChange}
          name="title"
          placeholder="Title"
          value={props.item.title}
        />
        <textarea
          rows="3"
          onChange={props.handleChange}
          name="content"
          placeholder="Content"
          value={props.item.content}
        ></textarea>
        <br />
        <button onClick={props.handleClick}>Add</button>
      </div>
    </div>
  );
}
