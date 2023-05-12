import './Sub04_2_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';
import BrownBar from '../../components/brown_bar/brown_bar';

export default function Sub04_2_intro() {
    return(
        <div className='sub04_2_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div style={{display: 'flex', backgroundColor: 'white'}}>
                            <BrownBar />
                            <h3>윤리규정</h3>
                        </div>
                        <div className='chapter_box'>
                            제1장 윤리규정의 시행에 관한 지침
                        </div>
                        <p>
                            <strong>제1조 윤리규정 서약</strong>
                            <br></br>
                            임상심리학회 회원으로 가입하기 위해서는 윤리규정에 서약해야 한다. 본 윤리규정의 발효시 기존 회원은 본 윤리규정에 서약한 것으로 간주한다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}