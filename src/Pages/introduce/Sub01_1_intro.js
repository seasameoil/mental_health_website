import './Sub01_1_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';

export default function Sub01_1_intro() {
    return(
        <div className='sub01_1_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{width: '100%', padding: '0 60px'}}>
                    <div className='content_img'>
                        <img src="/img/6.jpeg" />
                        <img src="/img/7.jpg" />
                    </div>
                    <hr></hr>
                    <div className='intro'>
                        <span style={{lineHeight: '35px'}}>
                            "사단법인 한국정신건강관리협회는 스트레스와 정신건강 문제를 겪는 분들을 위한 지원을 제공하는 동시에, 자기계발을 통해 더욱 풍요로운 삶을 살고자 하는 분들을 위한 곳입니다. 우리는 함께 성장하며, 건강한 내일을 만들어가고자 합니다."
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}