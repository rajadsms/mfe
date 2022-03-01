import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
const mount = (elem) => {
  ReactDOM.render(<App />, elem);
};

//In dev and ioslation call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");
  if (devRoot) mount(devRoot);
}

//If through container than export mount
export { mount };
