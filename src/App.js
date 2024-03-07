import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitlePage from "./components/TitlePage.js";
import RankPage from "./components/RankPage.js";

const API_URL = "https://liskadia.shtelo.org:3001";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="clicks">
            <Route index element={<TitlePage />} />
            <Route path="rank" element={<RankPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { API_URL };
export default App;
