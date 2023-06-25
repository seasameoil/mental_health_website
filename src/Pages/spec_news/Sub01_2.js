import React from "react";
import SubTop2 from "../../components/sub_top/sub_top2";
import Category2 from "../../components/category/category2";

export default function Sub01_2() {
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
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
