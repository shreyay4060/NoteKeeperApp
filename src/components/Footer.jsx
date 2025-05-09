import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p style={footerStyle}>Copyright @ {year}</p>
    </footer>
  );
}

export default Footer;

const footerStyle = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};
