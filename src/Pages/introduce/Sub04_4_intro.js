import './Sub04_4_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';
import BrownBar from '../../components/brown_bar/brown_bar';

export default function Sub04_4_intro() {
    return(
        <div className='sub04_4_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div style={{display: 'flex', backgroundColor: 'white'}}>
                            <BrownBar />
                            <h3>인권 및 회원권익위원회 운영규정</h3>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            2020년 3월 13일 제정
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            2022년 9월 15일 수정
                        </div>

                        <p>
                            <strong>제1조(목적)</strong>
                            <br></br>
                            이 규정은 한국임상심리학회 구성원의 인권을 보호하고 권익을 향상시키기 위하여 설치된 한국임상심리학회 인권 및 회원권익위원회(이하 ‘위원회’라 한다)의 조직과 운영 등에 관하여 필요한 사항을 규정함을 목적으로 한다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}