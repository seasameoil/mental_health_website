import './Sub04_1_edu.css'
import SubTop4 from '../../components/sub_top/sub_top4';
import Category4 from'../../components/category/category4';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub04_1_edu() {

    return(
        <div className='sub04_1_info'>
            <SubTop4 />
            <div style={{display: 'flex'}}>
                <Category4 />
                <div style={{width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0'}}>
                        <div className="donation-content">
                            안녕하세요,
                            <br></br>
                            한국정신건강관리협회를 후원해 주셔서 감사합니다! 우리는 비영리 사단법인으로서 급변하는 환경에서 개인과 집단이 경험하는 심리적, 정서적, 인성적 스트레스를 해결하고 도움을 주는 사람들을 육성하는 것을 목표로 합니다.
                            <br></br>
                            여러분의 후원은 다음과 같은 목적에 사용될 예정입니다:
                            <div className='donation-gray-box'>
                                1.	정신건강 교육 및 캠페인의 개최
                                <br></br>
                                2.	정신건강 서비스 제공을 위한 기관 지원
                                <br></br>
                                3.	정신건강 연구 및 데이터 수집
                                <br></br>
                                4.	정신건강을 필요로 하는 개인과 가족에 대한 지원 프로그램 운영
                                <br></br>
                            </div>
                            우리 협회는 여러분의 후원을 필요로 합니다. 후원하실 금액과 주기는 자유롭게 결정하실 수 있습니다. 귀하의 작은 도움이 더 큰 사회적 영향을 가져올 것이라 믿습니다. 저희는 모든 후원자분들께 정성스럽게 감사의 표시를 드리고, 후원금이 효율적이고 투명하게 운용되도록 최선을 다하겠습니다.여러분은 다음과 같은 방법으로 우리를 후원할 수 있습니다:
                            <div className='donation-gray-box'>
                                1.	개인 후원: 개인적인 기부는 우리의 사업을 지원하는 가장 직접적인 방법입니다. 저희 홈페이지 [홈페이지 주소]를 방문하여 온라인으로 기부할 수 있습니다.
                                <br></br>
                                2.	기업 후원: 기업들은 우리 협회에 후원금을 기부하여 사회적 책임을 실천할 수 있습니다. 협회와의 파트너십 협의를 통해 기업 후원 방안을 탐색할 수 있습니다. 문의사항이 있으시면 아래 연락처로 문의해 주세요.
                            </div>
                            
                                저희 협회의 활동에 대한 더 자세한 정보와 후원 방법에 대해 알아보려면 저희 홈페이지를 방문하시거나 아래 연락처로 문의해 주시기 바랍니다. 여러분의 작은 도움이 정신건강을 필요로 하는 많은 사람들에게 큰 변화를 가져다줄 것입니다.
                                <br></br>
                                감사합니다.
                                <br></br>
                                후원을 위해 아래의 계좌 정보를 안내해드립니다:
                                
                            <div className='donation-gray-box'>
                                은행: 기업은행
                                <br></br>
                                예금주: 사단법인한국정신건강관리협회
                                <br></br>
                                계좌번호: 123-456-789012(발급 예정)
                                <br></br>
                                한국정신건강관리협회
                                <br></br>
                                주소: 경상남도 창원시 의창구 사림로 130번길 8, 5층
                                <br></br>
                                전화번호: (055)264-5050
                                <br></br>
                                이메일: kamhm0320@gmail.com
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}