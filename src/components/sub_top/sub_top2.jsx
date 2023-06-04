import "./sub_top.css";

export default function SubTop2() {
  return (
    <div className="sub_top">
      <div className="top_img" style={{backgroundImage: 'url("../../img/2.jpeg")'}}>
        <div>
          <div className="content" style={{ fontWeight: "bold" }}>
            ABOUT
          </div>
          <div className="content" style={{ fontSize: "3rem" }}>
            협회소식
          </div>
        </div>
      </div>
    </div>
  );
}
