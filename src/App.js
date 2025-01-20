
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import Multiplication from "./Multiplication";
import Division from "./Division";
import Subtraction from "./Subtraction";
import SimpleCalculator from "./SimpleCalculator";
import ClickButton from "./ClickButton";
import BoxButton from "./BoxButton";
import ColorChangingBox from "./ColorChange";
import Input from "./Input";

const App = () => {
  return (
    <Router>
        <nav>
          <ul className="flex justify-around bg-black py-6">
            <li className="text-white text-lg "><Link to="/multiplication">Multiplication</Link></li>
            <li className="text-white text-lg"><Link to="/division">Division</Link></li>
            <li className="text-white text-lg"><Link to="/subtraction">Subtraction</Link></li>
            <li className="text-white text-lg"><Link to="/calculator">Simple Calculator</Link></li>
            <li className="text-white text-lg"><Link to="/input">Input</Link></li>
            <li className="text-white text-lg"><Link to="/counter">Counter</Link></li>
            <li className="text-white text-lg"><Link to="/box-button">Box Button</Link></li>
            <li className="text-white text-lg"><Link to="/color-box">Color Changing Box</Link></li>
            <li className="text-white text-lg"><Link to="/click-button">Click Button</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/multiplication" element={<Multiplication />} />
          <Route path="/division" element={<Division />} />
          <Route path="/subtraction" element={<Subtraction />} />
          <Route path="/calculator" element={<SimpleCalculator />} />
          <Route path="/input" element={<Input />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/box-button" element={<BoxButton />} />
          <Route path="/color-box" element={<ColorChangingBox />} />
          <Route path="/click-button" element={<ClickButton />} />
        </Routes>
    </Router>
  );
};

export default App;