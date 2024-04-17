import React from "react";
const Form = ({ color, setColor, handleSubmit }) => {
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form
        className="color-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(color);
        }}
      >
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="#fff"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          className="btn"
          style={{
            background: color || "#000",
            color: color === "#ffffff" ? "#000" : "#ffffff",
          }}
        >
          Generate
        </button>
      </form>
    </section>
  );
};

export default Form;
