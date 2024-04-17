import React from "react";

const Color = ({ weight, hex, type, toast }) => {
  async function handleCopy() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        await toast.success(`${hex} color copied to clipboard successfully`);
      } catch (error) {
        await toast.error(`faild to copy ${hex} color`);
      }
    } else {
      await toast.error(`faild to copy ${hex} color`);
    }
  }

  return (
    <div
      onClick={handleCopy}
      className="color"
      style={{
        backgroundColor: `#${hex} `,
        color: `${type === "tint" ? "#000" : "#fff"}`,
      }}
    >
      <p>{weight}%</p>
      <p>{hex}</p>
    </div>
  );
};

export default Color;
