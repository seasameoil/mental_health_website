import React from "react";

import SubTop2 from "../../components/sub_top/sub_top2";
import Category2 from "../../components/category/category2";
import BrownBar from "../../components/brown_bar/brown_bar";

export default function Sub02() {
  return (
    <div className="sub01_1_info">
      <SubTop2 />
      <div style={{ display: "flex" }}>
        <Category2 />
        <div
          style={{width: "100%", padding: "0 60px" }}
        >
          <div
            style={{
              display: "flex",
              padding: "50px 0"
            }}
          >
            <div style={{ display: "flex"}}>
              <BrownBar />
              <h3>2023년 한국임상심리학회 연간일정표</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
