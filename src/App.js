import React from "react";
import Counter from "./Counter";
import ClickButton from "./ClickButton";
import BoxButton from "./BoxButton";
import ColorChangingBox from "./ColorChange";

const App = () => {
  return (
    <div>
      <Counter />
      <BoxButton />
      <ClickButton/>
       <ColorChangingBox/>
    </div>
  );
};

export default App;