import React, { useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/footer/footer";
//(1) 협회 소개
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
//(2)협회소식
import News from "./Pages/spec_news/News";
import Sub01_1 from "./Pages/spec_news/Sub01_1";
import Sub01_2 from "./Pages/spec_news/Sub01_2";
import Sub01_3 from "./Pages/spec_news/Sub01_3";
import Sub02 from "./Pages/spec_news/Sub02";
import Sub03 from "./Pages/spec_news/Sub03";
//(3)정보광장
import Sub01_1_info from "./Pages/information/Sub01_1_info";
import Sub02_1_info from "./Pages/information/Sub02_1_info";
import Sub02_2_info from "./Pages/information/Sub02_2_info";
//(4)학술행사/교육
import Sub01_1_edu from "./Pages/education/Sub01_1_edu";
//(5)협회지
import Sub01_1_journal from "./Pages/journal/Sub01_1_journal";
//(6)비회원선정
import Sub01_1_non from "./Pages/non-member/Sub01_1_non";

function App() {
  return (
    <div className="App">
      <Nav />

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

      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/news/sub01/1" element={<Sub01_1 />} />
        <Route path="/news/sub01/2" element={<Sub01_2 />} />
        <Route path="/news/sub01/3" element={<Sub01_3 />} />
        <Route path="/news/sub02" element={<Sub02 />} />
        <Route path="/news/sub03" element={<Sub03 />} />
      </Routes>

      <Routes>
        <Route path="/information/sub01/1" element={<Sub01_1_info />} />
        <Route path="/information/sub02/1" element={<Sub02_1_info />} />
        <Route path="/information/sub02/2" element={<Sub02_2_info />} />
      </Routes>

      <Routes>
        <Route path="/education/sub01/1" element={<Sub01_1_edu />} />
      </Routes>

      <Routes>
        <Route path="/journal/sub01/1" element={<Sub01_1_journal />} />
      </Routes>

      <Routes>
        <Route path="/nonMember/sub01/1" element={<Sub01_1_non />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
