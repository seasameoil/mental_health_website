import './Sub03_1_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';

export default function Sub03_1_intro() {
    return(
        <div className='sub03_1_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        
                        <div class="history">
                            <div>
                                <h2>2023년</h2>
                                <ol>
                                    <li>
                                        <strong>3월</strong> 
                                        <br></br>
                                        명상 콘서트 'Look In Side'
                                        <br></br>
                                        한국정신건강관리협회, 비영리 사단법인 출범
                                    </li>
                                </ol>
                            </div>

                            <div>
                                <h2>2022년</h2>
                                <ol>
                                    <li>
                                        <strong>12월</strong>
                                        <br></br>
                                        AWAKENING, 명상리더십 강의
                                    </li>
                                    <li>
                                        <strong>10월</strong>
                                        <br></br>
                                        NLP Trainer 과정 1기 교육
                                    </li>
                                    <li>
                                        <strong>06월</strong>
                                        <br></br>
                                        NLP Practitioner 과정 1기 교육
                                    </li>
                                    <li>
                                        <strong>05월</strong>
                                        <br></br>
                                        초청 특강, CHANGE & SUCCESS "성공학" 강의 
                                        <br></br>
                                        초청 특강, 구글이 선택한 명상리더십 강의
                                    </li>
                                    <li>
                                        <strong>03월</strong>
                                        <br></br>
                                        초청 특강, "리더십 얼라이먼트" 강의
                                        <br></br>
                                        (가)한국정신건강관리협회 활동 시작
                                    </li>
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}