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
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>정회원 (연회비 : 200,000원)</h3>
                            </div>
                            <p>
                                <strong>자격 요건</strong>
                                <br></br>
                                본회가 정한 심화 교육과정 이수 및 연회비 납부
                            </p>
                            <p>
                                <strong>혜택</strong>
                                <br></br>
                                본회의 의결권 및 선거권 보유
                                <br></br>
                                본회의 교육 및 연수 프로그램 참여
                                <br></br>
                                국제 학술지 구독
                                <br></br>
                                심리 상담 및 임상 서비스 제공
                            </p>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}