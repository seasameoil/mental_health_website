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
                            <p>안녕하십니까? 한국임상심리학회 회원여러분,</p>
                            <p>3년째 지속된 코로나 상황 속에서도, 임상심리학자의 본연의 자세를 잃지 않고 학교와 임상현장을 지키고 심리서비스를 제공하느라 수고 많으셨습니다.</p>
                            <p>현재 한국임상심리학회는 임상심리전문가 약 1,900명, 정신건강임상심리사 약 3,200명과 학회원 9,000명으로 구성된 ‘전문심리치료학회’로 우뚝 성장하였습니다. 이는 지난 60여년 동안, 학회 발전을 위해 역대 회장님들과 임원진들의 헌신적인 노력과 학회원 여러분들의 적극적인 참여와 수고로 만들어진 결과입니다. 이제 한국임상심리학회는 여기에서 한 걸음 더 나아가 다원화되고 급변하는 21세기 시대적 변화에 맞는 ‘임상심리학자로서 재정립’하여, 미래 사회에 대비해 나가야 합니다. 따라서, 제59대는 ‘임상심리학자의 정체성, 재정립’이라는 목표를 가지고 학회를 이끌어가고자 합니다. 구체적인 목표와 전략은 다음과 같습니다.</p>
                        </div>
                    </div>
                    <div>
                        <strong style={{color: 'rgb(35, 35, 137)'}}>첫째, 임상심리학자는 과학적 연구에 기반하여 ‘정신건강 서비스를 제공하는 주체자’라는 것을 표방할 수 있도록 다각도로 지원하겠습니다.</strong>
                        <p>
                            이를 위해 ‘최신의 임상심리학 연구와 국책사업 및 EAP 사업’에 관심 있는 ‘학교와 현장 학회원들 간의 네트워크’를 만들고, 서로 정보를 공유하고 연대하여 수행할 수 있도록 적극적으로 지원하겠습니다. 또한 범국가적 차원에서도 임상심리학자가 ‘근거 기반 치료자’로서의 입지를 구축할 수 있도록, 법적 지위를 강화해 나갈 것입니다. 이를 위해 올해 발의된 심리사법이 잘 정비되고 정착할 수 있도록 관련 부처 및 학회와 지속해서 협력해 나가도록 하겠습니다. 또한 ‘한국임상심리학회 법인화’를 추진하여 법적 지위를 강화하고자 합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}