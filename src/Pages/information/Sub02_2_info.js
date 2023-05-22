import './Sub02_2_info.css'
import SubTop3 from '../../components/sub_top/sub_top3';
import Category3 from'../../components/category/category3';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub02_2_info() {
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
            <SubTop3 />
            <div style={{display: 'flex'}}>
                <Category3 />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div className='select_btn' onClick={handleClickDiv1} style={div1Style}>수련규정안내</div>
                        <div className='select_btn' onClick={handleClickDiv2} style={div2Style}>이수과목 및 이수시간</div>
                    </div>
                    
                    {showDiv1 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>정신건강전문요원의 수련 및 보수교육 등에 관한 규정</h3>
                            </div>
                            <div className='chapter_box'>
                                제 1 장 총칙
                            </div>
                            <p>
                                <strong>제 1 조 (목적)</strong>
                                <br></br>
                                본 규정은 회칙 제4조 4항에 명시된 한국의 임상심리전문가의 자격을 규정 함을 목적으로 한다.
                            </p>
                            <p>
                                <strong>제 2조 (정의)</strong>
                                <br></br>
                                임상심리전문가라 함은 한국심리학회가 인정하는 대학 및 기타 교육기관에서 임상심리학을 전공(3조 5항 참조)하여 석사 및 그 이상의 학위를 받은 자로서, 한국임상심리학회에서 정한 소정의 수련과정을 이수한 후 임상심리전문가 자격시험에 합격하고 자격심사위원회에서 그 자격을 인정받아 한국심리학회가 발급하는 자격증을 부여받은 자를 말한다.
                            </p>
                        </div>}


                    {showDiv2 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>정신건강임상심리사 이수과목 및 이수시간</h3>
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