import { Routes, Route } from 'react-router-dom';
import { Demo } from './components/navigation/Demo';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6 } from './slides';

function App() {
  return (
    <Routes>
      <Route path="/:slideNumber?" element={
        <Demo>
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
          <Slide5 />
          <Slide6 />
        </Demo>
      } />
    </Routes>
  );
}

export default App;
