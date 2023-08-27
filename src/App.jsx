import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit/Edit";
import CreatorInfo from "./components/CreatorInfo/CreatorInfo";

import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  const [viewAll, setViewAll] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Header setViewAll={setViewAll} />
        <Routes>
          <Route path="/" element={<Body viewAll={viewAll} />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/creator/:name" element={<CreatorInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
