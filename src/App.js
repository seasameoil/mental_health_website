import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Introduce from "./Pages/Introduce";
import News from "./Pages/News";
import Information from "./Pages/Information";
import Education from "./Pages/Education";
import Journal from "./Pages/Journal";
import Nonmember from "./Pages/Nonmember";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/news" element={<News />} />
        <Route path="/infomation" element={<Information />} />
        <Route path="/edu" element={<Education />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/non-member" element={<Nonmember />} />
      </Routes>

      <Nav />
    </div>
  );
}

export default App;
