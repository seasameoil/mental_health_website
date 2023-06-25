import './Sub01_1_edu.css'
import SubTop4 from '../../components/sub_top/sub_top4';
import Category4 from'../../components/category/category4';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub01_1_edu() {

    return(
        <div className='sub01_1_info'>
            <SubTop4 />
            <div style={{display: 'flex'}}>
                <Category4 />
                <div style={{width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0'}}>
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>정신건강관리사</h3>
                            </div>
                            <p>
                                일상생활에서 겪는 다양한 스트레스를 인식하고, 이를 해결하기 위한 다양한 방법을 습득하게 됩니다. 또한, 자신의 건강을 유지하기 위한 행동과 습관을 바로 잡을 수 있도록 도와주며, 스트레스 관리에 대한 인식과 자기 개발에 대한 의지를 강화시키는 효과도 기대할 수 있습니다.
                            </p>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>멘탈코칭(2급, 1급)</h3>
                            </div>
                            <p>
                                멘탈 코칭의 기본 개념과 원리, 인간의 심리적 특성 및 문제 해결 전략, 스트레스 관리 및 감정 조절 기술, 대인관계 및 의사소통 기술, 목표 설정 및 계획 세우기 기술, 인생 방향성 개발 및 전략 수립 등에 대한 이론적 지식과 함께 실제 상황에서 적용 가능한 기술적인 내용을 다룹니다.
                                <br></br>                            
                                멘탈코칭 민간자격 과정을 이수한 후에는 멘탈 코칭 분야에서의 전문성과 역량을 갖춘 자격을 취득할 수 있으며, 이를 토대로 멘탈 코칭 전문가로서 직업을 시작하거나, 관련 분야에서의 경력을 쌓을 수 있습니다.
                            </p>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>도서해설사(2급, 1급)</h3>
                            </div>
                            <p>
                                도서해설사는 도서를 도구로 하여 긍정적인 메시지를 전달하고, 개인 또는 집단에 대해 코칭할 수 있는 능력을 갖춘 전문가를 말합니다.
                                <br></br>
                                도서해설사가 되기 위해서는 일반적으로 해당 분야에서 인정받는 도서해설사 교육과정을 이수하고 시험을 통과해야 합니다. 대부분의 도서해설사 교육과정은 온라인 또는 오프라인으로 제공되며, 일반적으로 몇 주에서 몇 달간 진행됩니다. 교육과정은 도서해설에 필요한 기본 개념과 이론, 실제 독서와 해설에 대한 기술, 코칭 및 커뮤니케이션 기술 등을 다루는 내용으로 구성됩니다.
                                <br></br>
                                교육과정을 이수한 후에는 해당 분야에서 인정하는 시험을 통과하여 도서해설사 자격증을 취득할 수 있습니다. 도서해설사 자격증을 취득한 사람들은 전문적인 독서 및 코칭 활동을 수행하거나, 독서 커뮤니티에서 활발한 활동을 할 수 있습니다.
                            </p>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>NLP</h3>
                            </div>
                            <p>
                                practitioner / master practitioner / trainer
                            </p>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}