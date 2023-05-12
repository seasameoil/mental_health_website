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
                        <span>
                            "임상심리학은 개인의 일생에서 발생할 수 있는 지적, 정서적, 생물학적,<br></br>
                            심리적, 사회적, 행동적 부적응 및 불편감을 이론과 연구방법론에 근거하여<br></br>
                            이해하고 이를 경감시키기 위한 심리평가, 심리치료, 연구, 교육, 자문,<br></br>
                            예방, 및 재활 서비스를 제공하는 심리학의 대표 전문분야입니다."
                        </span>
                    </div>
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
                    
                </div>
            </div>
        </div>
    );
}