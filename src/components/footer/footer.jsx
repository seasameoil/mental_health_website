import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
    return(
        <div className='footer' style={{fontSize: '0.8rem', lineHeight: '20px'}}>
            <footer style={{backgroundColor: '#333', color: '#888'}}>
                <div style={{padding: '30px 50px'}}>
                    <div style={{color: '#ddd', width: '60%'}}>
                        개인정보처리방침 | 이용약관
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{marginTop: '20px'}}>
                            한국정신건강관리협회
                            <br></br>
                            대표전화 : 055-264-5050
                            <br></br>
                            주소 : (51151)경상남도 창원시 의창구 사림로130번길 8지번(도로명) / 경상남도 창원시 의창구 사림동 44-6(지번)
                            <br></br>
                            인증기업 : (주)THE W.O.W (주)MENTALIAN (주)I on ME (주)TNE US (주)SOUL WAE (주)위즈덤웨이브, 설립예정 (주)순오브제, 설립 예정 (주)NLP ACADEMY, 설립 예정
                        </div>
                        <div className='sns-container'>
                            <Link to="https://www.facebook.com/people/Kamhm-Npo/pfbid0SSouv6HRY8oWBrRGfdPbYZzStXDVxz5GEmLXPhajyvx6oxVqGwDjVDDXeT68EgmGl/">
                                <img src="/img/facebook.png" />
                            </Link>
                            <Link to="https://twitter.com/kamhm0320">
                                <img src="/img/twitter.png" />
                            </Link>
                            <Link to="https://www.instagram.com/npo.kamhm/">
                                <img src="/img/instagram.png" />
                            </Link>
                            <Link to="https://www.youtube.com/@user-lg7ky2gx4z/about">
                                <img src="/img/youtube.png" />
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className='copyright'>
                    COPYRIGHT &copy; SINCE 2022 한국정신건강관리협회 ALL RIGHTS RESERVED.
                </div>
            </footer>
        </div>
    );
}