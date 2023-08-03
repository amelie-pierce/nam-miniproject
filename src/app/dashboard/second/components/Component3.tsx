import React from "react";
import Component4 from "./Component4";

const Component3 = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", paddingLeft: "2rem" }}
    >
      Component 3
      <Component4 />
    </div>
  );
};

export default Component3;
