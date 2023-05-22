import './Sub02_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';

export default function Sub02_intro() {
    return(
        <div className='sub01_2_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div style={{width: '252px', height: '306px', backgroundColor: 'white'}}>
                            사진
                        </div>
                        <div style={{width: '100%', paddingLeft: '10px', backgroundColor: 'yellowgreen'}}>
                            <p>안녕하세요!</p>
                            <p>사단법인 한국정신건강관리협회입니다. 저희는 자기계발과 스트레스 관리에 대한 다양한 정보와 지원을 제공하고자 노력하고 있습니다. NLPU를 기반으로 한 접근법과 행동성공학을 통해, 개인의 삶을 더욱 풍요롭게 만들어주는 방법을 제시해드리고자 합니다.</p>
                            <p>우리는 스트레스와 불안, 우울 등의 정신건강 문제를 겪는 분들이 스스로의 힘으로 해결할 수 있도록 지원하고자 합니다. 또한, 자기계발을 통해 더욱 성숙하고 행복한 삶을 살고자 하는 분들에게도 손을 내밀고자 합니다.</p>
                            <p>우리는 함께 성장하고, 함께 도움이 되는 사람들을 육성하고자 합니다. 저희의 홈페이지를 통해 다양한 정보와 커뮤니티를 제공할 예정이니 많은 관심과 참여 부탁드립니다. 함께 건강하고 행복한 삶을 살아봅시다!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}