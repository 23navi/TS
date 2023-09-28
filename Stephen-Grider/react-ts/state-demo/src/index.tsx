import React from "react";
import ReactDOM from "react-dom/client";
import { GuestList } from "./components/GuestList";

function App() {
  return <GuestList />;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
