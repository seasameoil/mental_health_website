import './Sub05_4_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub05_4_intro() {
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);

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

    return(
        <div className='sub05_4_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div className='select_btn' onClick={handleClickDiv1} style={div1Style}>구성</div>
                        <div className='select_btn' onClick={handleClickDiv2} style={div2Style}>대의원회 게시판</div>
                        <div className='select_btn' onClick={handleClickDiv3} style={div3Style}>대의원회 운영규정</div>
                    </div>
                    
                    {showDiv1 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>대의원회 임원</h3>
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
                            
                        </div>
                    }

                    {showDiv3 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>2018년 대의원회 운영규정 (180220개정)</h3>
                            </div>
                            <div className='chapter_box'>
                                제1장 총칙
                            </div>
                            <p>
                                <strong>제 1 조 (목적)</strong>
                                <br></br>
                                본 운영규정은 한국임상심리학회 회칙 제9조에 명시된 대의원회의 조직, 의사, 기타 필요한 사항을 규정함으로써 한국임상심리학회(이하 “본 학회”라고 한다)의 대의기관인 대의원회(이하 “본회”라고 한다)의 민주적이고 효율적인 운영에 기여함을 목적으로 한다.
                            </p>   
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}