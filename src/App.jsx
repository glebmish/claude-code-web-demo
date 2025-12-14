import { Routes, Route } from "react-router-dom";
import { Demo } from "./components";
import {
  Slide0,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
} from "./slides";

function App() {
  return (
    <Routes>
      <Route
        path="/:slideNumber?"
        element={
          <Demo>
            <Slide0 />
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
            <Slide6 />
            <Slide7 />
            <Slide8 />
            <Slide9 />
            <Slide10 />
            <Slide11 />
            <Slide12 />
            <Slide13 />
          </Demo>
        }
      />
    </Routes>
  );
}

export default App;
