import './footer.css';

export default function Footer() {
    return(
        <div className='footer'>
            <footer style={{backgroundColor: '#333', color: '#888'}}>
                <div style={{padding: '30px 50px'}}>
                    <div style={{color: '#ddd', width: '60%'}}>
                        개인정보처리방침 | 이용약관
                    </div>
                    <div style={{marginTop: '20px'}}>
                        한국정신건강관리협회
                        <br></br>
                        대표전화 : 055-264-5050
                        <br></br>
                        주소 : (51151)경상남도 창원시 의창구 사림로130번길 8지번(도로명) / 경상남도 창원시 의창구 사림동 44-6(지번)
                        <br></br>
                        인증기업 : (주)THE W.O.W (주)MENTALIAN (주)I on ME (주)TNE US (주)SOUL WAE (주)위즈덤웨이브, 설립예정 (주)순오브제, 설립 예정 (주)NLP ACADEMY, 설립 예정
                    </div>
                </div>
                <div className='copyright'>
                    COPYRIGHT &copy; SINCE 2022 한국정신건강관리협회 ALL RIGHTS RESERVED.
                </div>
            </footer>
        </div>
    );
}