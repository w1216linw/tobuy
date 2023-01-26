import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tobuys from "./pages/Tobuys";
import Likes from "./pages/Likes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/tobuys" element={<Tobuys />} />
      </Route>
    </Routes>
  );
}

export default App;
