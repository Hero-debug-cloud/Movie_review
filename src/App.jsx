
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Specific from "./components/Specific/Specific";
import All from "./pages/All/All"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<All />}>
        <Route index element={<Home />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/specific/:name" element={<Specific />} />
      </Route>

      {/* invalid url entered by the enivroment; */}
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
