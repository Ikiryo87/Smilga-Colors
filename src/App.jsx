import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from "values.js";

import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

// let newColor = color.substring(1);
// let colorList = new Values(newColor).all(10);
// setList(colorList);

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  // console.log(new Values("#f15025").all(10));
  // toast.error("error");
  // toast.success("success");

  const addColor = (color) => {
    console.log(color);
    try {
      setColors(new Values(color).all(10));
      toast.success("added a new color" + " " + color);
    } catch (err) {
      toast.error("cannot add color" + error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
