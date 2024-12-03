import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeFi from "./pages/HomeFi";
import FormpageFi from "./pages/FormpageFi";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFi />} />
        <Route path="/form" element={<FormpageFi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
