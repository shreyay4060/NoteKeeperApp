import React from "react";

export default function Header() {
  return (
    <div style={headerStyle} className="header">
      <h1>Notes App</h1>
    </div>
  );
}

const headerStyle = {
  height: "70px",
  width: "100%",
  backgroundColor: "orange",
  border: "0.3px solid transperent",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
};
