import './Sub04_1_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub04_1_intro() {
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);

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

    const handleClickDiv1 = () => {
        setShowDiv1(true);
        setShowDiv2(false);
      };

    const handleClickDiv2 = () => {
        setShowDiv1(false);
        setShowDiv2(true);
    };

    return(
        <div className='sub04_1_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div className='select_btn' onClick={handleClickDiv1} style={div1Style}>회칙</div>
                        <div className='select_btn' onClick={handleClickDiv2} style={div2Style}>운영세칙</div>
                    </div>
                    
                    {showDiv1 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>2022년 한국임상심리학회 회칙(221228개정)</h3>
                            </div>
                            <div className='chapter_box'>
                                제 1장 총칙
                            </div>
                            <p>
                                <strong>제 1 조 (명칭)</strong>
                                <br></br>
                                본 학회는 한국심리학회 산하 학회로서 한국임상심리학회(Korean Clinical Psychology Association)라 한다.
                            </p>
                            <p>
                                <strong>제 2 조 (소재)</strong>
                                <br></br>
                                학회의 사무국은 이사회에서 지정하는 장소에 둔다.
                            </p>
                        </div>}


                    {showDiv2 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>2022년 한국임상심리학회 운영세칙(221014시행)</h3>
                            </div>
                            <p>
                                <strong>제 1 조 (목적)</strong>
                                <br></br>
                                본 세칙은 본회 회칙의 시행에 필요한 사항을 규정하는 것을 목적으로 한다.
                            </p>
                            <p>
                                <strong>제 2 조 (회원의 의무)</strong>
                                <br></br>
                                1. 본회의 회원은 회비납부의 의무를 지닌다. 단 종신회원은 회비납부의 의무를 면한다.
                                <br></br>
                                2. 본회의 회원은 이사회에서 의결한 학술 및 연수활동, 윤리교육에 참여하여야 한다. 전문회원으로서 1년간 연수평점 10시간 이상(윤리교육 2시간 포함) 취득하지 못한 자는 주의 경고를 하며, 전문가 자격의 지속여부를 이사회에서 심사할 수 있다. 3회의 주의경고를 받은 자는 회원 자격정지 처분을 내린다.
                                <br></br>
                                3. 본회의 목적에 위배되는 행동을 하거나 정당한 이유 없이 의무사항을 준수하지 않은 자는 이사회의 결의로 회원의 모든 자격을 정지할 수 있다.
                                <br></br>
                                4. 1년 이상 회비가 체납되면 완납될 때까지 본회가 발행하는 간행물을 배부하지 않으며, 2년이상 회비가 체납되면 완납될 때까지 회원자격이 일시 정지된다.
                                <br></br>
                                5. 전문회원, 정회원, 종신회원은 지회에 가입해야 한다.
                            </p>
                        </div>}
                </div>
            </div>
        </div>
    );
}