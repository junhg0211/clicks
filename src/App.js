import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitlePage from "./components/TitlePage.js";
import RankPage from "./components/RankPage.js";

const API_URL = "https://liskadia.shtelo.org:3001";

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

export { API_URL };
export default App;
