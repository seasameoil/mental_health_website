import './Sub04_1_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub04_1_intro() {

    return(
        <div className='sub04_1_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>사단법인 한국정신건강관리협회 정관 (2022. 12. 21. 제정)</h3>
                            </div>
                            
                            <div className='chapter_box'>
                                제1장 총칙
                            </div>
                            <p>
                                <strong>제1조(명칭)</strong>
                                <br></br>
                                이 법인의 명칭은 “사단법인 한국정신건강관리협회 (이하 "본회" 이라 한다)라 하며 영문표기 "Korea Mental Health Care Association"로 한다.
                            </p>
                            <p>
                                <strong>제2조(소재지)</strong>
                                <br></br>
                                본회의 사무소는 경상남도 창원시에 둔다. 단, 필요시 국내 국외에 지부를 둘 수 있다.
                            </p>
                            <p>
                                <strong>제3조(목적)</strong>
                                <br></br>
                                본회는 급격한 환경변화로 인해 개인 또는 집단이 겪는 심리적, 정서적, 인성적 스트레스를 해
                                결하고 도움을 줄 수 있는 사람을 육성함을 목적으로 한다.
                            </p>
                            <p>
                                <strong>제4조(사업)</strong>
                                <br></br>
                                본회는 제3조의 목적을 달성하기 위하여 다음의 사업을 한다.
                                <br></br>
                                ① NLP 교육 및 인력양성
                                <br></br>
                                ② 한국정신건강관리사의 교육 및 인력양성
                                <br></br>
                                ③ 멘탈코칭 및 도서해설사 교육 및 인력양성
                                <br></br>
                                ④ 위 사업 운영에 필요한 조사연구, 인식제고, 정책 제언 및 제 단체와의 교류
                                <br></br>
                                ⑤ 본회의 목정 달성에 적합한 사업 운영 및 기여하는 제 활동 일체
                            </p>

                            <div className='chapter_box'>
                                제2장 회원
                            </div>
                            <p>
                                <strong>제5조(회원의 구분)</strong>
                                <br></br>
                                ① 본회의 회원은 정회원과 준회원, 일반회원으로 한다
                                ② 본회의 권리와 의무 및 선거권과 피선거권은 정회원과 준회원에게 있다 전문위원, 일반회원은 권리와 의무 및 선거권과 피선거권을 주어지지 않는다.
                                ③ 정회원은 본회가 정한 심화 교육과정을 이수하고 연회비를 납부하는 자로 창출, 보호, 활용
                                을 도모하여 본회의 목적에 따라 활동하는 자로 한다.
                                ④ 준회원은 본회가 정한 기본 교육과정을 이수하고 연회비를 납부하는 자로 정회원의 자격을
                                가지지 않고 본회의 목적에 따라 활동하는 자로 한다.
                                ⑤ 일반회원은 본 회의 홈페이지를 통하여 가입 및 탈퇴를 할 수 있으며 회비 납부 의무는 없
                                다. 홈페이지를 통하여 정보를 교류할 수 있다.
                            </p>
                            <p>
                                {/*여기서부터 작업(제6조!)*/}
                                <strong>제2조(소재지)</strong>
                                <br></br>
                                본회의 사무소는 경상남도 창원시에 둔다. 단, 필요시 국내 국외에 지부를 둘 수 있다.
                            </p>
                            <p>
                                <strong>제3조(목적)</strong>
                                <br></br>
                                본회는 급격한 환경변화로 인해 개인 또는 집단이 겪는 심리적, 정서적, 인성적 스트레스를 해
                                결하고 도움을 줄 수 있는 사람을 육성함을 목적으로 한다.
                            </p>
                            <p>
                                <strong>제4조(사업)</strong>
                                <br></br>
                                본회는 제3조의 목적을 달성하기 위하여 다음의 사업을 한다.
                                <br></br>
                                ① NLP 교육 및 인력양성
                                <br></br>
                                ② 한국정신건강관리사의 교육 및 인력양성
                                <br></br>
                                ③ 멘탈코칭 및 도서해설사 교육 및 인력양성
                                <br></br>
                                ④ 위 사업 운영에 필요한 조사연구, 인식제고, 정책 제언 및 제 단체와의 교류
                                <br></br>
                                ⑤ 본회의 목정 달성에 적합한 사업 운영 및 기여하는 제 활동 일체
                            </p>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}