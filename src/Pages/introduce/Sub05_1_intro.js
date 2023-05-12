import './Sub05_1_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub05_1_intro() {
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    const [showDiv4, setShowDiv4] = useState(false);
    const [showDiv5, setShowDiv5] = useState(false);

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

    const div5Style = {
        backgroundColor: showDiv5 ? "#795548" : "white",
        color: showDiv5 ? "white" : "black",
        border: showDiv5 ? "1px solid #a0744f" : "1px solid rgb(77, 77, 77)"
    };

    const handleClickDiv1 = () => {
        setShowDiv1(true);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
      };

    const handleClickDiv2 = () => {
        setShowDiv1(false);
        setShowDiv2(true);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
    };

    const handleClickDiv3 = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(true);
        setShowDiv4(false);
        setShowDiv5(false);
    };
    const handleClickDiv4 = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(true);
        setShowDiv5(false);
    };
    const handleClickDiv5 = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(true);
    };

    return(
        <div className='sub05_1_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div className='select_btn' onClick={handleClickDiv1} style={div1Style}>제59대(2023)</div>
                        <div className='select_btn' onClick={handleClickDiv2} style={div2Style}>58대(2022)~50대(2014)</div>
                        <div className='select_btn' onClick={handleClickDiv3} style={div3Style}>49대(2013)~45대(2009)</div>
                        <div className='select_btn' onClick={handleClickDiv4} style={div4Style}>44대(2008)~40대(2004)</div>
                        <div className='select_btn' onClick={handleClickDiv5} style={div5Style}>39대(2003)~34대(1998)</div>
                    </div>
                    
                    {showDiv1 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>제59대 임원진</h3>
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
                                <h3>제58대 임원진</h3>
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

                    {showDiv3 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>제49대 임원진</h3>
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

                    {showDiv4 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>제44대 임원진</h3>
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

                    {showDiv5 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>제39대 임원진</h3>
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
                </div>
            </div>
        </div>
    );
}