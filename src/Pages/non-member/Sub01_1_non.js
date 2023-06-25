import './Sub01_1_non.css'
import SubTop6 from '../../components/sub_top/sub_top6';
import Category6 from'../../components/category/category6';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub01_1_non() {

    return(
        <div className='sub01_1_info'>
            <SubTop6 />
            <div style={{display: 'flex'}}>
                <Category6 />
                <div style={{width: '100%', padding: '0 60px'}}>
                <div className='content_img'>
                        <img src="/img/2.jpeg" />
                        <img src="/img/1.jpeg" />
                    </div>
                    <div style={{display: 'flex'}}>
                
                        <div style={{marginBottom: '100px'}}>
                            <div style={{display: 'flex', marginBottom: '10px'}}>
                                <BrownBar />
                                <h3>사단법인 한국정신건강관리협회 회원가입 신청하기</h3>
                            </div>
                            <a href="https://forms.gle/WCGJtyDoJBvUm2du9" className='googleForm'>회원가입 신청서 작성하기</a>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}