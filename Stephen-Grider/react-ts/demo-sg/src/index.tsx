import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./components/Parent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function App() {
  return <Parent></Parent>;
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
