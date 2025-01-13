import React from "react";
import Counter from "./Counter";
import SimpleCalculator from "./SimpleCalculator";
import ClickButton from "./ClickButton";
import BoxButton from "./BoxButton";
import ColorChangingBox from "./ColorChange";
import Input from "./Input";

const App = () => {
  return (
    <div>
      <SimpleCalculator />
      <ClickButton />
      <Input />
      <Counter />
      <BoxButton />
      <ColorChangingBox />
    </div>
  );
};
export default App;
