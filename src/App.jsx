import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PeacefulPlace from "./pages/PeacefulPlace";
import Seoul from "./pages/Seoul";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peaceful-place" element={<PeacefulPlace />} />
        <Route path="/seoul" element={<Seoul />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;