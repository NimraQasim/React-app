import React from "react";
import Counter from "./Counter";
import ClickButton from "./ClickButton";
import BoxButton from "./BoxButton";

const App = () => {
  return (
    <div>
      <Counter />
      <BoxButton />
      {/* <ClickButton/> */}
    </div>
  );
};

export default App;