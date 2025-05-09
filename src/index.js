import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <>
    <Header />
    <App />
    <Footer />
  </>,
  document.getElementById("root")
);
