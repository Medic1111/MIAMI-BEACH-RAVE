import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Success from "./pages/Success/Success";
import Verify from "./pages/Verify/Verify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/success/:id" element={<Success />} />
        <Route path="/verify/:id" element={<Verify />} />
        <Route path="*" element={<Main />} replace />
      </Routes>
    </div>
  );
}

export default App;
