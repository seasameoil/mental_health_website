import React, { useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/footer/footer";
import Introduce from "./Pages/introduce/Sub01_1_intro";
import News from "./Pages/News";
import Information from "./Pages/Information";
import Education from "./Pages/Education";
import Journal from "./Pages/Journal";
//(1) 학회 소개
import Sub01_1_intro from "./Pages/introduce/Sub01_1_intro";
import Sub01_2_intro from "./Pages/introduce/Sub01_2_intro";
import Sub02_intro from "./Pages/introduce/Sub02_intro";
import Sub03_1_intro from "./Pages/introduce/Sub03_1_intro";
import Sub03_2_intro from "./Pages/introduce/Sub03_2_intro";
import Sub04_1_intro from "./Pages/introduce/Sub04_1_intro";
import Sub04_2_intro from "./Pages/introduce/Sub04_2_intro";
import Sub04_3_intro from "./Pages/introduce/Sub04_3_intro";
import Sub04_4_intro from "./Pages/introduce/Sub04_4_intro";
import Sub05_1_intro from "./Pages/introduce/Sub05_1_intro";
import Sub05_2_intro from "./Pages/introduce/Sub05_2_intro";
import Sub05_3_intro from "./Pages/introduce/Sub05_3_intro";
import Sub05_4_intro from "./Pages/introduce/Sub05_4_intro";
import Sub05_5_intro from "./Pages/introduce/Sub05_5_intro";
import Sub05_6_intro from "./Pages/introduce/Sub05_6_intro";
import Sub05_7_intro from "./Pages/introduce/Sub05_7_intro";

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
        <Route path="/introduce/sub01/1" element={<Sub01_1_intro />} />
        <Route path="/introduce/sub01/2" element={<Sub01_2_intro />} />
        <Route path="/introduce/sub02" element={<Sub02_intro />} />
        <Route path="/introduce/sub03/1" element={<Sub03_1_intro />} />
        <Route path="/introduce/sub03/2" element={<Sub03_2_intro />} />
        <Route path="/introduce/sub04/1" element={<Sub04_1_intro />} />
        <Route path="/introduce/sub04/2" element={<Sub04_2_intro />} />
        <Route path="/introduce/sub04/3" element={<Sub04_3_intro />} />
        <Route path="/introduce/sub04/4" element={<Sub04_4_intro />} />
        <Route path="/introduce/sub05/1" element={<Sub05_1_intro />} />
        <Route path="/introduce/sub05/2" element={<Sub05_2_intro />} />
        <Route path="/introduce/sub05/3" element={<Sub05_3_intro />} />
        <Route path="/introduce/sub05/4" element={<Sub05_4_intro />} />
        <Route path="/introduce/sub05/5" element={<Sub05_5_intro />} />
        <Route path="/introduce/sub05/6" element={<Sub05_6_intro />} />
        <Route path="/introduce/sub05/7" element={<Sub05_7_intro />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
