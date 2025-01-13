import React from "react";
import Counter from "./Counter";
import Division from "./Division";
import Subtraction from "./Subtraction";
import SimpleCalculator from "./SimpleCalculator";
import ClickButton from "./ClickButton";
import BoxButton from "./BoxButton";
import ColorChangingBox from "./ColorChange";
import Input from "./Input";

const App = () => {
  return (
    <div>
      <Division/>
      <Subtraction />
      <SimpleCalculator />
      <Input />
      <Counter />
      <BoxButton />
      <ColorChangingBox />
       <ClickButton />
    </div>
  );
};
export default App;
