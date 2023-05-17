import React from "react";
import SubTop from "../../components/sub_top/sub_top_news";
import Category from "../../components/category/category_news";

export default function Sub01_1() {
  return (
    <div>
      <SubTop />
      <div style={{ display: "flex" }}>
        <Category />
      </div>
      <h1>관련 공지사항</h1>
    </div>
  );
}
