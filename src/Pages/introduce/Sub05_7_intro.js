import './Sub05_5_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub05_7_intro() {
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    const [showDiv4, setShowDiv4] = useState(false);

    const [show2Div1, setShow2Div1] = useState(true);
    const [show2Div2, setShow2Div2] = useState(false);
    const [show2Div3, setShow2Div3] = useState(false);
    const [show2Div4, setShow2Div4] = useState(false);

    const div1Style = {
        backgroundColor: showDiv1 ? "#795548" : "white",
        color: showDiv1 ? "white" : "black",
        border: showDiv1 ? "1px solid #a0744f" : "1px solid rgb(77, 77, 77)"
      };
    
    const div2Style = {
        backgroundColor: showDiv2 ? "#795548" : "white",
        color: showDiv2 ? "white" : "black",
        border: showDiv2 ? "1px solid #a0744f" : "1px solid rgb(77, 77, 77)"
    };

    const div3Style = {
        backgroundColor: showDiv3 ? "#795548" : "white",
        color: showDiv3 ? "white" : "black",
        border: showDiv3 ? "1px solid #a0744f" : "1px solid rgb(77, 77, 77)"
    };

    const div4Style = {
        backgroundColor: showDiv4 ? "#795548" : "white",
        color: showDiv4 ? "white" : "black",
        border: showDiv4 ? "1px solid #a0744f" : "1px solid rgb(77, 77, 77)"
    };

    const div1Style2 = {
        backgroundColor: show2Div1 ? "#46657F" : "white",
        color: show2Div1 ? "white" : "black",
        border: show2Div1 ? "1px solid #a0744f" : "none"
    };

    const div2Style2 = {
        backgroundColor: show2Div2 ? "#46657F" : "white",
        color: show2Div2 ? "white" : "black",
        border: show2Div2 ? "1px solid #a0744f" : "none"
    };

    const div3Style2 = {
        backgroundColor: show2Div3 ? "#46657F" : "white",
        color: show2Div3 ? "white" : "black",
        border: show2Div3 ? "1px solid #a0744f" : "none"
    };

    const div4Style2 = {
        backgroundColor: show2Div4 ? "#46657F" : "white",
        color: show2Div4 ? "white" : "black",
        border: show2Div4 ? "1px solid #a0744f" : "none"
    };

    const handleClickDiv1 = () => {
        setShowDiv1(true);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
      };

    const handleClickDiv2 = () => {
        setShowDiv1(false);
        setShowDiv2(true);
        setShowDiv3(false);
        setShowDiv4(false);
    };

    const handleClickDiv3 = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(true);
        setShowDiv4(false);
    };

    const handleClickDiv4 = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(true);
    };

    const handle2ClickDiv1 = () => {
        setShow2Div1(true);
        setShow2Div2(false);
        setShow2Div3(false);
        setShow2Div4(false);
      };

    const handle2ClickDiv2 = () => {
        setShow2Div1(false);
        setShow2Div2(true);
        setShow2Div3(false);
        setShow2Div4(false);
    };

    const handle2ClickDiv3 = () => {
        setShow2Div1(false);
        setShow2Div2(false);
        setShow2Div3(true);
        setShow2Div4(false);
    };

    const handle2ClickDiv4 = () => {
        setShow2Div1(false);
        setShow2Div2(false);
        setShow2Div3(false);
        setShow2Div4(true);
    };

    return(
        <div className='sub05_5_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div className='top_container'>
                        <div className='top_container2'>
                            <div className='select_btn2' onClick={handle2ClickDiv1} style={div1Style2}>게슈탈트연구회</div>
                            <div className='select_btn2' onClick={handle2ClickDiv2} style={div2Style2}>노인상담 및 심리치료 연구회</div>
                            <div className='select_btn2' onClick={handle2ClickDiv3} style={div3Style2}>로르샤흐 연구회</div>
                            <div className='select_btn2' onClick={handle2ClickDiv4} style={div4Style2}>멘탈 휘트니스 긍정심리연구회</div>
                        </div>
                    </div>
                    
                    <div style={{display: 'flex', backgroundColor: 'skyblue'}}>
                        <div className='select_btn' onClick={handleClickDiv1} style={div1Style}>구성</div>
                        <div className='select_btn' onClick={handleClickDiv2} style={div2Style}>연간계획</div>
                        <div className='select_btn' onClick={handleClickDiv3} style={div3Style}>설립 목적 및 회칙</div>
                        <div className='select_btn' onClick={handleClickDiv4} style={div4Style}>공지사항</div>
                    </div>
                    
                    {showDiv1 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>구성</h3>
                            </div>
                            <table className='table_3_2'>
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>이름</th>
                                        <th>소속</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>회장</th>
                                        <th>홍길동</th>
                                        <th>한국대학교 한국학과</th>
                                    </tr>
                                    <tr>
                                        <th>회장</th>
                                        <th>홍길동</th>
                                        <th>한국대학교 한국학과</th>
                                    </tr>
                                    <tr>
                                        <th>회장</th>
                                        <th>홍길동</th>
                                        <th>한국대학교 한국학과</th>
                                    </tr>
                                </tbody>
                            </table>   
                        </div>
                    }

                    {showDiv2 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>연간계획</h3>
                            </div>
                        </div>
                    }

                    {showDiv3 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>설립목적</h3>
                            </div>
                            <p>
                                Gestalt 연구회는 Gestalt 심리치료를 경험하고 연구하여 심리치료자로서의 자질을 성숙시키기 위한 모임입니다. 1994년부터 임상 및 상담심리 분야의 전문가 혹은 수련생들을 위하여 3년간의 게슈탈트 지도자과정을 개설하여 게슈탈트치료 전문가들을 양성하기 시작했고, 1999년 9월 게슈탈트 심리치료 수퍼비젼 그룹을 이수한 전문회원들을 중심으로 연구회가 설립되었습니다. 게슈탈트 치료는 국내에서 초창기에는 거의 김정규 교수 혼자 시행해 오던 실정이었다면, 현재는 많은 전문가들이 배출되어 매우 활발한 활동을 하고 있습니다. 2009년 6월 40여명의 수료자를 배출하였습니다.
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}