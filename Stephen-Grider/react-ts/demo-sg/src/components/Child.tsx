import React from "react";

interface IChildProps {
  color: string;
}
const Child: React.FC<IChildProps> = ({ color }) => {
  return <h1>Child</h1>;
};

export { Child };
