import './Sub05_5_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub05_6_intro() {
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);

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
      };

    const handleClickDiv2 = () => {
        setShowDiv1(false);
        setShowDiv2(true);
        setShowDiv3(false);
    };

    const handleClickDiv3 = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(true);
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
                            <div className='select_btn2' onClick={handle2ClickDiv1} style={div1Style2}>서울동부지회</div>
                            <div className='select_btn2' onClick={handle2ClickDiv2} style={div2Style2}>서울서부지회</div>
                            <div className='select_btn2' onClick={handle2ClickDiv3} style={div3Style2}>서울남부지회</div>
                            <div className='select_btn2' onClick={handle2ClickDiv4} style={div4Style2}>서울북부지회</div>
                        </div>
                    </div>
                    
                    <div style={{display: 'flex', backgroundColor: 'skyblue'}}>
                        <div className='select_btn' onClick={handleClickDiv1} style={div1Style}>구성</div>
                        <div className='select_btn' onClick={handleClickDiv2} style={div2Style}>연간계획</div>
                        <div className='select_btn' onClick={handleClickDiv3} style={div3Style}>공지사항</div>
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

                        </div>
                    }
                </div>
            </div>
        </div>
    );
}