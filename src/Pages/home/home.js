import './home.css'
import ImageSlider from "../../components/ImageSlider/imageSlider.js"
import { Link } from 'react-router-dom';

export default function Home() {
    const images = [
        "/img/1.jpeg",
        "/img/6.jpeg",
        "/img/4.jpeg"
      ];

    return(
        <div>
            <ImageSlider images={images} />
            <div style={{display: 'flex', padding: '0px 60px', justifyContent: 'space-between', marginTop: '50px'}}>
                <div>
                    <h1>국민의 마음건강에 앞장서는 전문가 그룹</h1>
                    <p style={{lineHeight: '3rem', fontSize: '1.4rem'}}>열정적인 학문탐구와 전문성 향상 
                        <br></br>
                        한국정신건강관리협회는 회원들이 회원들의 전문성을 지속 및 
                        <br></br>
                        향상시키기 위해 끊임없이 연구하고 있습니다.
                    </p>
                </div>
                <div>
                    <img src="/img/5.jpeg" style={{width: '500px', height: '300px'}}/>
                </div>  
            </div>

            <div style={{display: 'flex', padding: '0px 60px', justifyContent: 'space-between', marginTop: '50px'}}>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div>
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <h2>MENU</h2>
                    </div>
                    <div className='home_4img_container'>
                        <Link to="/introduce/sub01/1">
                            <div>
                                <img src="/img/2.jpeg" />
                                <div style={{padding: '5px 15px'}}>
                                    <div><strong>협회소개</strong></div>
                                    <div>About us</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/education/sub01/1">
                            <div>
                                <img src="/img/10.jpg" />
                                <div style={{padding: '5px 15px'}}>
                                    <div><strong>이벤트</strong></div>
                                    <div>Event</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/nonMember/sub01/1">
                            <div>
                                <img src="/img/11.jpeg" />
                                <div style={{padding: '5px 15px'}}>
                                    <div><strong>협회원 가입</strong></div>
                                    <div>Join us</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/news/sub01/1">
                            <div>
                                <img src="/img/3.jpeg" />
                                <div style={{padding: '5px 15px'}}>
                                    <div><strong>협회소식</strong></div>
                                    <div>News</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>

            <div className="shortcuts_container" style={{margin: '50px 0px'}}>
                <Link to="/information/sub01/1">
                <div
                    className="shortcuts"
                    style={{ backgroundImage: 'url("../../img/6.jpeg")' }}
                >
                    <div className="shortcut">
                    <div style={{ fontSize: "30px", fontWeight: "bold"}}>
                        정신건강관리사
                    </div>
                    <div style={{ textAlign: "center" }}>Spiritual Health Manager</div>
                    </div>
                </div>
                </Link>
                <Link to="/information/sub02/1">
                <div
                    className="shortcuts"
                    style={{ backgroundImage: 'url("../../img/4.jpeg")' }}
                >
                    <div className="shortcut">
                    <div style={{ fontSize: "30px", fontWeight: "bold" }}>멘탈코치</div>
                    <div style={{ textAlign: "center" }}>Mental Coach</div>
                    </div>
                </div>
                </Link>
                <Link to="/journal/sub01/1">
                <div
                    className="shortcuts"
                    style={{ backgroundImage: 'url("../../img/15.jpg")' }}
                >
                    <div className="shortcut">
                    <div style={{ fontSize: "30px", fontWeight: "bold" }}>블로그</div>
                    <div style={{ textAlign: "center" }}>Blog</div>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}