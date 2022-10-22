import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import SearchBooks from "./components/SearchBooks";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
