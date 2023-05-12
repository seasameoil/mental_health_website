import './Sub01_2_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub01_2_intro() {
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
        <div className='sub01_2_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div className='select_btn' onClick={handleClickDiv1} style={div1Style}>임상심리학자의 주요업무</div>
                        <div className='select_btn' onClick={handleClickDiv2} style={div2Style}>유사전공과의 차이점</div>
                    </div>
                    
                    {showDiv1 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>연구</h3>
                            </div>
                            <p>
                                임상심리학자를 다른 분야의 전문가들과 가장 크게 구분시켜주는 영역입니다. 임상심리학자가 수행하는 연구는 바로 임상 현장에서 정신과 환자를 이해하고 치료하는데 직접적인 도움을 줄 수 있습니다. 예를 들어, 특정 정신병리의 진단을 위한 방법이나 도구 개발을 하는 것이 임상심리학자의 역할입니다. 또한 어떤 치료방법이 특정 문제의 치료에 가장 효과적인지, 어떤 질병에 걸리기 쉬운 사람들의 특성이 따로 있는지 등을 조사하는 것도 임상심리학자의 역할입니다.
                            </p>
                            <p>
                                이런 활동을 담당하고 있는 임상심리학자들은 대부분 심리학과가 있는 대학이나 의과대학에 소속되어 있는 전문가들입니다. 이들은 다양한 연구를 시행하고 이를 학술지나 학술대회 등을 통해 발표합니다. 치료 장면에 속한 심리학자들의 경우 연구에 특화된 활동을 보이지는 않지만 소속 기관의 필요에 따라 매우 실용적인 연구를 시행하기도 합니다.
                            </p>

                            <div style={{display: 'flex'}}>
                                <BrownBar />
                                <h3>심리평가</h3>
                            </div>
                            <p>
                                한 환자의 문제를 평가하기 위해서는 그 사람의 정신과적 장애여부 뿐만 아니라 직업적 흥미나 대인관계양상, 적성 등 다양한 측면에 대한 분석이 필요합니다. 이런 분석을 도와주는 것이 바로 심리검사를 이용한 심리평가입니다. 심리평가는 오랫동안 임상심리학자들의 주요 업무로 인식되어 왔고, 현재도 심리검사를 이용할 수 있는 유일한 전문가집단이 바로 임상심리학자입니다. 심리검사를 통해 알아볼 수 있는 영역은 매우 다양합니다.
                            </p>
                        </div>}


                    {showDiv2 && 
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>정신과 의사와의 차이</h3>
                            </div>
                            <p>
                                정신과 의사는 의과대학을 통해 배출됩니다. 따라서 의예과와 의학과를 합쳐 6년의 기초의학 교육을 받고 1년간의 인턴기간을 거치게 됩니다. 이 7년이라는 기간에는 정신의학보다는 일반의학 전체를 배우는데 시간을 보내게 됩니다. 이후 정신과를 자신의 전공으로 선택하게 되면 그 때부터 정신과 전공의(레지던트)로서의 본격적인 수련이 시작됩니다. 물론 수련병원에 따라 차이가 있지만 수련의 대부분은 약물치료를 비롯한 생물학적 치료와 환자관리가 주를 이룹니다. 따라서 임상심리학자들과 같이 전문적인 심리평가나 심리치료 수련을 받을 기회는 매우 적다고 보겠습니다.
                            </p>
                            <p>
                                따라서 정신과 의사는 심리학자라기보다는 의사에 가까운 직업군이라고 볼 수 있습니다. 정신과 의사는 주로 우울증이나 정신분열증 등의 주요 정신병리에 대한 치료활동에 많은 시간을 보내고 있으며, 이들을 위한 치료에도 주로 약물치료, 전기-경련 치료 등 생물학적 치료를 사용합니다. 물론 일부 정신과 의사들은 약물치료보다 정신분석이나 최면, 인지행동치료를 선호하기도 하지만 이는 정식 교육과정에 의해서라기보다는 스스로의 선택사항이라고 볼 수 있습니다.
                            </p>

                            <div style={{display: 'flex'}}>
                                <BrownBar />
                                <h3>정신간호사와의 차이</h3>
                            </div>
                            <p>
                                한 환자의 문제를 평가하기 위해서는 그 사람의 정신과적 장애여부 뿐만 아니라 직업적 흥미나 대인관계양상, 적성 등 다양한 측면에 대한 분석이 필요합니다. 이런 분석을 도와주는 것이 바로 심리검사를 이용한 심리평가입니다. 심리평가는 오랫동안 임상심리학자들의 주요 업무로 인식되어 왔고, 현재도 심리검사를 이용할 수 있는 유일한 전문가집단이 바로 임상심리학자입니다. 심리검사를 통해 알아볼 수 있는 영역은 매우 다양합니다.
                            </p>
                        </div>}
                </div>
            </div>
        </div>
    );
}