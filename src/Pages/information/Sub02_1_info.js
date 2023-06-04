import './Sub01_1_info.css'
import './Sub02_1_info.css'
import SubTop3 from '../../components/sub_top/sub_top3';
import Category3 from'../../components/category/category3';
import BrownBar from '../../components/brown_bar/brown_bar';

export default function Sub02_1_info() {

    return(
        <div className='sub02_1_info'>
            <SubTop3 />
            <div style={{display: 'flex'}}>
                <Category3 />
                <div style={{width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0'}}>
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>멘탈코치</h3>
                            </div>
                            
                            <div>
                                <table className='info_health_manager'>
                                    {/*
                                    <thead>
                                        <tr>
                                            <th>구분</th>
                                            <th>내용</th>
                                        </tr>
                                    </thead>
                                    */}
                                    <tbody>
                                        <tr>
                                            <th>자격 수여 및 발급기관</th>
                                            <th>(사)한국정신건강관리협회</th>
                                        </tr>
                                        <tr>
                                            <th>구분</th>
                                            <th>등록민간자격</th>
                                        </tr>
                                        <tr>
                                            <th>주무부처</th>
                                            <th>보건복지부</th>
                                        </tr>
                                        <tr>
                                            <th>자격 발급 횟수</th>
                                            <th>연 2회</th>
                                        </tr>
                                        <tr>
                                            <th>응시자격</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th>수련기관</th>
                                            <th>협회 지정 필수수련기관 또는 수련감독자가 근무하는 기관</th>
                                        </tr>
                                        <tr>
                                            <th>수련기관 관리</th>
                                            <th>필수수련기관제도 운영</th>
                                        </tr>
                                        <tr>
                                            <th>수련기간</th>
                                            <th>1.<br></br>2.<br></br>3.<br></br>4.</th>
                                        </tr>
                                        <tr>
                                            <th>수련내용</th>
                                            <th>
                                                1. 이론 교육 및 실습 교육 최소 이수 시간 명시
                                                <br></br>
                                                2. 사례발표, 윤리교육 등 필수 이수 항목 명시			
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>수련과정</th>
                                            <th>수련등록 후 매년 상·하반기 해당 기간에 모집보고 및 수료보고→자격 규정 및 수련과정 시행세칙에 따른 연차 인정 여부에 따라 자격시험 필기(기초, 임상) 응시→전 과정 수련 종료 후 수련완료심사를 거쳐 면접 응시→수련완료자 및 면접 합격자에 대한 자격 심사→자격증 교부</th>
                                        </tr>
                                        <tr>
                                            <th>시험과목</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th>합격기준</th>
                                            <th></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div style={{display: 'flex', backgroundColor: 'white'}}>
                            <BrownBar />
                            <h3>멘탈코치 자격정보</h3>
                        </div>
                        
                        <div style={{marginBottom: '50px'}}>
                            <table className='info_health_manager'>
                                {/*
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>내용</th>
                                    </tr>
                                </thead>
                                */}
                                <tbody>
                                    <tr>
                                        <th>자격명</th>
                                        <th>멘탈코치</th>
                                    </tr>
                                    <tr>
                                        <th>등록번호</th>
                                        <th>2017-003744</th>
                                    </tr>
                                    <tr>
                                        <th>자격의 종류</th>
                                        <th>등록민간자격</th>
                                    </tr>
                                    <tr>
                                        <th>자격발급기관</th>
                                        <th>(사)한국정신건강관리협회</th>
                                    </tr>
                                    <tr>
                                        <th>2급 과정</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th>1급 과정</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th>검정(응시)료 및 보수교육•자격갱신 비용</th>
                                        <th>1. 기초과정 
                                            <br></br>
                                            #선택사항:공통교육 참가 시 10만원	
                                            <br></br>		
                                            2. 전문과정
                                            <br></br>
                                            #선택사항:공통교육 참가 시 10만원
                                            <br></br>			
                                            3. 보수교육 및 자격 갱신	
                                            <br></br>
                                            → 수련 과정 중 개인의 선택에 따라 비용이 추가될 수 있음.				

                                    </th>
                                    </tr>
                                    <tr>
                                        <th>환불규정</th>
                                        <th>
                                            시험 시행 3주 전, 100% 환불
                                            <br></br>
                                            시험 시행 3일 전, 50% 환불
                                            <br></br>
                                            시험 시행 2일 전, 환불 불가
                                            <br></br>
                                            정확한 환불 기준은 해당 회차의 자격시험 공고문 확인 必		
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <div style={{display: 'flex', backgroundColor: 'white'}}>
                            <BrownBar />
                            <h3>소비자 알림사항</h3>
                        </div>
                        <p>
                            1. 상기 ""멘탈코치"" 자격은 국가 외의 자가 자격을 신설하여 운영하기 위해 자격기본법 규정에 따라 등록한 민간자격으로, 국가로부터 인정받은 공인자격이 아닙니다.
                            <br></br>
                            2. 민간자격 등록 및 공인 제도에 대한 상세내용은 민간자격정보서비스의 '민간자격검색' 란을 참고하여 주십시오.			
                        </p>
                    </div>

                    <div>
                        <div style={{display: 'flex', backgroundColor: 'white'}}>
                            <BrownBar />
                            <h3>자격 발급·시행 기관 정보</h3>
                        </div>
                        
                        <div style={{marginBottom: '50px'}}>
                            <table className='info_health_manager'>
                                <tbody>
                                    <tr>
                                        <th>발급기관</th>
                                        <th>
                                            기관명: (사)한국정신건강관리협회
                                            <br></br>
                                            홈페이지:바로가기 
                                            <br></br>
                                            연락처:055-264-5050 /kamhm0320@gmail.com 
                                            <br></br>
                                            소재지:경남 창원시 의창구 사림로 130번길 8, 5층				
                                        </th>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}