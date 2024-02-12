import React, { useState } from "react";
import "./Child.css";

const Selection = ({ applyColor }) => {
  let [styles, updateSelectionStyle] = useState({ backgroundColor: "" });
  return (
    <div
      onClick={() => applyColor(updateSelectionStyle)}
      className="fix-box"
      style={styles}
    >
      <h1 className="subheading">Selection</h1>
    </div>
  );
};

export default Selection;
