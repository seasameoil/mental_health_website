import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Introduce from "./Pages/Introduce";
import News from "./Pages/News";
import Information from "./Pages/Information";
import Education from "./Pages/Education";
import Journal from "./Pages/Journal";
import Sub01 from "./Pages/spec_news/Sub01";
import Sub02 from "./Pages/spec_news/Sub02";
import Sub03 from "./Pages/spec_news/Sub03";
import Sub04 from "./Pages/spec_news/Sub04";

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/news" element={<News />} />
        <Route path="/infomation" element={<Information />} />
        <Route path="/edu" element={<Education />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>

      <Routes>
        <Route path="/news/sub01" element={<Sub01 />} />
        <Route path="/news/sub02" element={<Sub02 />} />
        <Route path="/news/sub03" element={<Sub03 />} />
        <Route path="/news/sub04" element={<Sub04 />} />
      </Routes>
      
    </div>
  );
}

export default App;
