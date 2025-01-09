import React from "react";
import Counter from "./Counter";
import ClickButton from "./ClickButton";
import BoxButton from "./BoxButton";
import ColorChangingBox from "./ColorChange";
import Input from "./Input";

const App = () => {
  return (
    <div>
       <Input/>
      <Counter />
      <BoxButton />
       <ColorChangingBox/>
       <ClickButton/>
    </div>
  );
};
export default App;