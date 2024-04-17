import React from "react";
import Color from "./Color";
import { nanoid } from "nanoid";
const ColorsList = ({ colors, toast }) => {
  return (
    <div className="colors">
      {colors.map((color) => {
        const { weight, hex, type } = color;
        return (
          <Color
            weight={weight}
            hex={hex}
            type={type}
            key={nanoid()}
            toast={toast}
          />
        );
      })}
    </div>
  );
};

export default ColorsList;
