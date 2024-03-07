import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitlePage from "./components/TitlePage.js";
import RankPage from "./components/RankPage.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TitlePage />}></Route>
          <Route path="/rank" element={<RankPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
