import React from "react";
import Component2 from "./Component2";

const Component1 = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Component 1
      <Component2 />
    </div>
  );
};

export default Component1;
