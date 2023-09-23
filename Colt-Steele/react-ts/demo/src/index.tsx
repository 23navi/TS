import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function App() {
  return <h1>Hello</h1>;
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
