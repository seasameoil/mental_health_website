import './Sub01_1_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';

export default function Sub01_1_intro() {
    return(
        <div className='sub01_1_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div className='content_img'>
                        이미지 영역
                    </div>
                    <hr></hr>
                    <div className='intro'>
                        <span style={{lineHeight: '35px'}}>
                            "사단법인 한국정신건강관리협회는 스트레스와 정신건강 문제를 겪는 분들을 위한 지원을 제공하는 동시에, 자기계발을 통해 더욱 풍요로운 삶을 살고자 하는 분들을 위한 곳입니다. 우리는 함께 성장하며, 건강한 내일을 만들어가고자 합니다."
                        </span>
                    </div>
                    {/*
                    <hr></hr>
                    <div style={{fontWeight: 'bold', padding: '20px 0', backgroundColor:'yellow'}}>
                        2021년 현재 약 8,000여명의 회원이 사회각층의 다양한 영역에서 왕성하게 활동하고 있으며, 본 학회 산하에 13개의 지회 및 22개의 연구회를 두어 회원들의 전문성을 제고하는 데 주력하여 급변하는 시대적 요구에 부응하고 있습니다.
                    </div>
                    <div>
                        <hr style={{width: '60px', borderColor: 'blue', marginLeft: '0'}}></hr>
                    </div>
                    <div style={{fontWeight: 'bold', padding: '20px 0', backgroundColor:'yellow'}}>
                        한국심리학회가 공인하는 수련과정을 마친 뒤 임상심리전문가의 자격을 취득한 회원의 수만도 약 1,700여명에 달하며, 정신건강복지법에 근거하여 보건복지부가 공인하는 정신건강임상심리사(1급 및 2급) 자격을 취득한 회원의 수는 약 2,700명에 이릅니다.
                    </div>
                    */}
                </div>
            </div>
        </div>
    );
}