import { useState } from "react";
import ColorsList from "./ColorsList";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);
  function handleSubmit(color) {
    try {
      setColors(new Values(color).all(10));
    } catch (error) {
      toast.error("can not find this color");
    }
  }
  return (
    <main>
      <ToastContainer
        position="top-center"
        style={{
          fontSize: "1rem",
          width: "30%",
          userSelect: "none",
          letterSpacing: "1px",
        }}
        autoClose={3000}
        draggableDirection="Y"
        draggablePercent={60}
        limit={4}
      />
      <Form
        color={color}
        setColor={setColor}
        handleSubmit={handleSubmit}
        colors={colors}
      />
      <ColorsList colors={colors} toast={toast} />
    </main>
  );
};
export default App;
