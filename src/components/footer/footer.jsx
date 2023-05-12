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
                        회사명
                        <br></br>
                        대표전화 : | FAX : | E-MAIL :
                        <br></br>
                        주소 : 
                    </div>
                </div>
                <div className='copyright'>
                    COPYRIGHT &copy; SINCE 2021 회사명 ALL RIGHTS RESERVED.
                </div>
            </footer>
        </div>
    );
}